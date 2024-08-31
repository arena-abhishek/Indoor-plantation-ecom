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
        <h5>Movies</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Generes</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Trending</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">New Releases</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Popular</a>
          </li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Shows</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Generes</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Trending</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">New Releases</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Popular</a>
          </li>
        </ul>
      </div>
      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Support</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Contact Us</a>
          </li>
        </ul>
      </div>
      <div class="col-6 col-md-2 mb-3 text-white">
        <h5>Subscription</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Subscription</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-secondary">Features</a>
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
            <a class="link-body-emphasis text-secondary" href="#" 
              >Terms of Use</a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis text-secondary" href="#" 
              >Privacy policy</a>
          </li>
          <li class="ms-3">
            <a class="link-body-emphasis text-secondary" href="#" 
              >Cookie policy</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</div>`;
myFooter = makeElement("section", "container-fluid", "", "", content2);
footer.append(myFooter);
