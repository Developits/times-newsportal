function loadnews(category_id) {
  // start spinning //
  toggleSpinner(true);
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaynews(data.data));
}

const displaynews = (newses) => {
  // counter section ///
  const newsCounter = document.getElementById("news-counter");
  newsCounter.textContent = "";
  // news section ///
  const newsContainer = document.getElementById("news-container");
  newsContainer.textContent = "";
  if (newses.length === 0) {
    const alartDiv = document.createElement("div");
    alartDiv.innerHTML = `<h1 class="text-center mt-5">No news for Today.</h1>`;
    newsContainer.appendChild(alartDiv);
  } else {
    // counter section ///
    const counterDiv = document.createElement("div");
    counterDiv.classList.add("counter");
    counterDiv.innerHTML = `
    <h3>${newses.length}  items found for this category.</h3>
    `;
    newsCounter.appendChild(counterDiv);

    // news section ///
    for (const news of newses) {
      const newsDiv = document.createElement("div");
      newsDiv.classList.add("news");
      newsDiv.innerHTML = `
      <div class="d-flex">
              <div>
                <img class="thumbnailimg p-4 rounded"
                src=${news.image_url} alt="" />
              </div>
              <div class="p-4">
                <h3>
                  ${news.title}
                </h3>
                <p class="py-4">
                 ${news.details.slice(0, 500)}.....
                </p>
                <div class="d-flex justify-content-around">
                  <div class="d-flex">
                    <div>
                      <img class="authorimg"
                      src=${news.author.img}
                      alt="" />
                    </div>
                    <div>
                      <span>
                      ${news.author.name} <br />
                       ${news.author.published_date}
                      </span>
                    </div>
                  </div>
                  <div><i class="fa-regular fa-eye"></i> ${
                    news.total_view
                  }M</div>
                  <div>
                    <i class="fa-solid fa-star-half-stroke"></i
                    ><i class="fa-regular fa-star"></i
                    ><i class="fa-regular fa-star"></i
                    ><i class="fa-regular fa-star"></i
                    ><i class="fa-regular fa-star"></i>
                  </div>
                  <div>
                  <!-- Button trigger modal -->
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
        
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            ${news.title}
                          </h5>
                        </div>
                        <div class="modal-body">${news.details}</div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
      `;
      newsContainer.appendChild(newsDiv);
    }
  }
  // stop spinning //
  toggleSpinner(false);
};

//  spinning section //
const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};
