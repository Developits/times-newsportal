function loadCategorys() {
  const url = "https://openapi.programming-hero.com/api/news/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategory(data.data.news_category));
}

const displayCategory = (categories) => {
  const newsCategory = document.getElementById("category-container");
  for (const category of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
          <button
            onclick="loadnews('${category.category_id}')"
            type="button"
            class="btn btn-outline-primary"
           >
            ${category.category_name}
          </button>`;
    newsCategory.appendChild(categoryDiv);
  }
};

loadCategorys();
