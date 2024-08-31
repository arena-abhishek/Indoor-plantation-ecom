/* Very very important function please do not touch it */
function makeElement(
  myElem = "div",
  myClass,
  attribute = "",
  value = "",
  content = ""
) {
  let i = 0;
  let elem = document.createElement(myElem);
  if (content) {
    elem.innerHTML = content;
  }
  elem.className = myClass;
  if (attribute) {
    attribute.forEach((element) => {
      elem.setAttribute(element, value[i]);
      i++;
    });
  }
  return elem;
}
let header = document.querySelector(".header");
let content1 = `    <nav class="navbar-expand-lg navbar-dark" >
        <div class="row gap-0 py-sm-1 d-flex align-items-center">
          <div
            class="col-6 col-md-6 col-lg-2 d-flex justify-content-center justify-content-sm-start align-content-center"
          >
            <!-- logo -->
            <a class="navbar-brand" href="#"
              ><img src="survival_logo[2].png" alt="logo" height="50" />
            </a>
          </div>
          <div
            class="col-7 d-none d-lg-flex justify-content-center align-content-center"
          >
            <div class="row">
              <div class="col  px-1 py-1">
                <ul
                  class="navbar-nav  pt-2 px-1 d-flex align-items-center justify-items-center flex-grow-1"
                >
                  <li class="nav-item navItems rounded">
                    <a
                      class="h4 nav-link text-dark py-3 px-4 rounded d-inline-block"
                      aria-current="page"
                      href="index.html"
                      >Home</a
                    >
                  </li>
                  <li class="nav-item navItems rounded">
                    <a class="h4 nav-link text-dark py-3 px-4 rounded" href="plant.html"
                      >Our plants</a
                    >
                  </li>
                  <li class="nav-item navItems rounded">
                    <a class="h4 nav-link text-dark py-3 px-4 rounded" href="offer.html  "
                      >Offer</a
                    >
                  </li>
                  <li class="nav-item navItems rounded">
                    <a class="h4 nav-link text-dark py-3 px-4 rounded" href="sign up.html"
                      >Sign up</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="col-3 d-none d-lg-block d-flex justify-items-center align-items-center"
          >
            <!-- search & notification -->
            <div class="d-none d-lg-flex justify-content-lg-end align-items-center">
              <form action="#">
                <!-- Search field with search icon -->
                <div class="input-group">
                  <input
            class="form-control me-2 text-center"
            id="navSearch"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
                 
                </div>
              </form>
            <div
          class="d-flex align-item-center"
          style="cursor: pointer; gap: 10px"
        >
          <i class="fa-solid fa-user" style="color: #e1dad0" id="cartItem"></i>
          <i
            class="fa-solid fa-cart-shopping cart-btn"
            style="color: #e1dad0"
            id="cartItem"
          ></i>
        </div>
            </div>
          </div>
          <div
            class="col-6 col-lg-0 d-block d-lg-none d-flex justify-content-end"
          >
            <!-- toggle btn -->
            <button
              class="navbar-toggler shadow-none border-0 d-block d-lg-none "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
              
            >
              <span class="navbar-toggler-icon" ></span>
            </button>
          </div>
        </div>
        <div class="row d-block d-lg-none">
          <!-- sidebar -->
          <div
            class="sidebar offcanvas offcanvas-start d-block d-lg-none"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style="background-color: #1c6644"
          >
            <!-- sidebar header -->
            <div class="offcanvas-header text-white p-2">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                <img src="survival_logo[2].png" alt="logo" height="50" />
              </h5>

              <button
                type="button"
                class="btn-close btn-close-white shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="row mt-4"
              style="
                width: 100%;
                height: 2px;
                background: linear-gradient(
                  90deg,
                  rgba(216, 215, 223, 0) 0%,
                  rgb(158, 158, 161) 17%,
                  rgba(233, 233, 240, 0) 100%
                );
              "
            ></div>
            <div class="offcanvas-body d-flex flex-column align-items-start">
              <ul
                class="navbar-nav d-block d-lg-none fs-5 flex-grow-1 pe-3 rounded"
              >
                <li class="nav-item mx-2">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="index.html"
                    >Home</a
                  >
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="plant.html">Our plants</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="offer.html">Offer</a>
                </li>
                <li class="nav-item mx-2">
                  <a class="nav-link" href="sign up.html">Sign up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>`;
myHeader = makeElement("div", "container-xxl", "", "", content1);
header.append(myHeader);

let footer = document.querySelector(".footer");
let content2 = `<div class="container-xxl" style="background-color: #1c6644">
  <footer class="py-5 0f0f0f">
    <div class="row">
      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Home</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Categories</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Devices</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Pricing</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">FAQs</a>
          </li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Connet With Us</h5>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i
                class="bi bi-twitter-x text-white"
                style="font-size: 24px"
              ></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i
                class="bi bi-instagram text-white"
                style="font-size: 24px"
              ></i
            ></a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis" href="#"
              ><i
                class="bi bi-facebook text-white"
                style="font-size: 24px"
              ></i
            ></a>
          </li>
        </ul>
      </div>

      <div
        class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-white"
      >
        <p>© 2024 Company, Inc. All rights reserved.</p>
        <ul class="list-unstyled d-flex">
          <li class="ms-3">
            <a class="link-body-emphasis text-white" href="#" 
              >Terms of Use</a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis text-white" href="#" 
              >Privacy policy</a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis text-white" href="#" 
              >Cookie policy</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</div>`;
myFooter = makeElement("section", "container-fluid", "", "", content2);
footer.append(myFooter);

