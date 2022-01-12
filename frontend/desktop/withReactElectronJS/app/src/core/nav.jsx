import React from "react";
import ROUTES from "Constants/routes";
import { Link } from "react-router-dom";
import { YourBrandLogo } from "../assets";
import { Resizable } from "re-resizable";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.history = props.history;
    this.state = {
      mobileMenuActive: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  toggleMenu(event) {
    this.setState({
      mobileMenuActive: !this.state.mobileMenuActive,
    });
  }

  // Using a custom method to navigate because we
  // need to close the mobile menu if we navigate to
  // another page
  navigate(url) {
    this.setState(
      {
        mobileMenuActive: false,
      },
      function () {
        this.history.push(url);
      }
    );
  }

  render() {
    return (
      <div className="nav-side-container">
        <div className="nav-side">
          <div className="top-bar"></div>
          <div className="side-nav-top-part">
            <div className="your-brand-container">
              <div className="logo-container" width={60}>
                <img src={YourBrandLogo} alt="logo" width={60} />
              </div>
              <div className="title-brand-container">
                <div className="title-brand">Your Brand</div>
              </div>
            </div>
            <nav
              className="nav-link-continer"
              role="navigation"
              aria-label="main navigation">
              <div className="nav-link">
                <a
                  className="icon-title-wrapper-navlink"
                  onClick={() => this.navigate(ROUTES.DASHBOARD)}>
                  <div className="icon-nav-link">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g id="icon_home">
                        <g id="Home">
                          <mask
                            id="mask0"
                            mask-type="alpha"
                            maskUnits="userSpaceOnUse"
                            x="2"
                            y="1"
                            width="21"
                            height="22">
                            <path
                              id="Clip 2"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M2 1.00021H22.4998V22.5052H2V1.00021Z"
                              fill="white"
                            />
                          </mask>
                          <g mask="url(#mask0)">
                            <path
                              id="Fill 1"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.7168 15.2913C14.9208 15.2913 15.9008 16.2643 15.9008 17.4603V20.5363C15.9008 20.7933 16.1068 20.9993 16.3708 21.0053H18.2768C19.7788 21.0053 20.9998 19.7993 20.9998 18.3173V9.59331C20.9928 9.08331 20.7498 8.60331 20.3328 8.28431L13.7398 3.02631C12.8548 2.32531 11.6168 2.32531 10.7288 3.02831L4.18079 8.28231C3.74779 8.61131 3.50479 9.09131 3.49979 9.61031V18.3173C3.49979 19.7993 4.72079 21.0053 6.22279 21.0053H8.14679C8.41779 21.0053 8.63779 20.7903 8.63779 20.5263C8.63779 20.4683 8.64479 20.4103 8.65679 20.3553V17.4603C8.65679 16.2713 9.63079 15.2993 10.8258 15.2913H13.7168ZM18.2768 22.5053H16.3528C15.2508 22.4793 14.4008 21.6143 14.4008 20.5363V17.4603C14.4008 17.0913 14.0938 16.7913 13.7168 16.7913H10.8308C10.4618 16.7933 10.1568 17.0943 10.1568 17.4603V20.5263C10.1568 20.6013 10.1468 20.6733 10.1258 20.7413C10.0178 21.7313 9.17179 22.5053 8.14679 22.5053H6.22279C3.89379 22.5053 1.99979 20.6263 1.99979 18.3173V9.60331C2.00979 8.60931 2.46779 7.69931 3.25879 7.10031L9.79379 1.85531C11.2328 0.715311 13.2378 0.715311 14.6738 1.85331L21.2558 7.10331C22.0288 7.69231 22.4868 8.60031 22.4998 9.58231V18.3173C22.4998 20.6263 20.6058 22.5053 18.2768 22.5053Z"
                              fill="black"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="title-nav-link">
                    <div className="text-nav-link">Dashboard</div>
                  </div>
                </a>
              </div>
              <div className="nav-link">
                <Link
                  className="icon-title-wrapper-navlink"
                  onClick={() => this.navigate(ROUTES.ORDERS)}>
                  <div className="icon-nav-link">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g id="icon_orders">
                        <g id="Buy">
                          <path
                            id="Stroke 1"
                            d="M2.75009 3.24988L4.83009 3.60988L5.79309 15.0829C5.87009 16.0199 6.65309 16.7389 7.59309 16.7359H18.5021C19.3991 16.7379 20.1601 16.0779 20.2871 15.1899L21.2361 8.63188C21.3421 7.89888 20.8331 7.21888 20.1011 7.11288C20.0371 7.10388 5.16409 7.09888 5.16409 7.09888"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 3"
                            d="M14.1251 10.7948H16.8981"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 5"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.15438 20.2025C7.45538 20.2025 7.69838 20.4465 7.69838 20.7465C7.69838 21.0475 7.45538 21.2915 7.15438 21.2915C6.85338 21.2915 6.61038 21.0475 6.61038 20.7465C6.61038 20.4465 6.85338 20.2025 7.15438 20.2025Z"
                            fill="#130F26"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 7"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.4347 20.2025C18.7357 20.2025 18.9797 20.4465 18.9797 20.7465C18.9797 21.0475 18.7357 21.2915 18.4347 21.2915C18.1337 21.2915 17.8907 21.0475 17.8907 20.7465C17.8907 20.4465 18.1337 20.2025 18.4347 20.2025Z"
                            fill="#130F26"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="title-nav-link">
                    <div className="text-nav-link">Orders</div>
                  </div>
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  className="icon-title-wrapper-navlink"
                  onClick={() => this.navigate(ROUTES.CUSTOMERS)}>
                  <div className="icon-nav-link">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g id="icon_3_user">
                        <g id="3 User">
                          <path
                            id="Stroke 1"
                            d="M17.8877 10.8967C19.2827 10.7007 20.3567 9.5047 20.3597 8.0557C20.3597 6.6277 19.3187 5.4437 17.9537 5.2197"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 3"
                            d="M19.7285 14.2503C21.0795 14.4523 22.0225 14.9253 22.0225 15.9003C22.0225 16.5713 21.5785 17.0073 20.8605 17.2813"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 5"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.8867 14.6638C8.6727 14.6638 5.9277 15.1508 5.9277 17.0958C5.9277 19.0398 8.6557 19.5408 11.8867 19.5408C15.1007 19.5408 17.8447 19.0588 17.8447 17.1128C17.8447 15.1668 15.1177 14.6638 11.8867 14.6638Z"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 7"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.8867 11.8879C13.9957 11.8879 15.7057 10.1789 15.7057 8.06891C15.7057 5.95991 13.9957 4.24991 11.8867 4.24991C9.77772 4.24991 8.06772 5.95991 8.06772 8.06891C8.05972 10.1709 9.75672 11.8809 11.8587 11.8879H11.8867Z"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 9"
                            d="M5.88481 10.8967C4.48881 10.7007 3.41581 9.5047 3.41281 8.0557C3.41281 6.6277 4.45381 5.4437 5.81881 5.2197"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 11"
                            d="M4.04391 14.2503C2.69291 14.4523 1.74991 14.9253 1.74991 15.9003C1.74991 16.5713 2.19391 17.0073 2.91191 17.2813"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="title-nav-link">
                    <div className="text-nav-link">Customers</div>
                  </div>
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  className="icon-title-wrapper-navlink"
                  onClick={() => this.navigate(ROUTES.PRODUCTS)}>
                  <div className="icon-nav-link">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g id="icon_bookmark">
                        <g id="Bookmark">
                          <path
                            id="Stroke 1"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M19.7389 6.15362C19.7389 3.40274 17.8582 2.29999 15.1504 2.29999H8.79149C6.16693 2.29999 4.20001 3.32756 4.20001 5.97016V20.694C4.20001 21.4198 4.98096 21.8769 5.61355 21.522L11.9955 17.9421L18.3223 21.516C18.9559 21.8729 19.7389 21.4158 19.7389 20.689V6.15362Z"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 3"
                            d="M8.27118 9.02802H15.5895"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="title-nav-link">
                    <div className="text-nav-link">Products</div>
                  </div>
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  className="icon-title-wrapper-navlink"
                  onClick={() => this.navigate(ROUTES.CATEGORIES)}>
                  <div className="icon-nav-link">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g id="icon_category">
                        <g id="Category">
                          <path
                            id="Stroke 1"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 3"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 5"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 7"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="title-nav-link">
                    <div className="text-nav-link">Categories</div>
                  </div>
                </Link>
              </div>
            </nav>
          </div>
          <div className="side-nav-bottom-part">
            <nav className="nav-link-container">
              <div className="nav-link">
                <Link
                  className="icon-title-wrapper-navlink"
                  onClick={() => this.navigate(ROUTES.PROFILE)}>
                  <div className="icon-nav-link">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g id="icon_profile">
                        <g id="Profile">
                          <path
                            id="Stroke 1"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.9848 15.3462C8.11716 15.3462 4.8143 15.931 4.8143 18.2729C4.8143 20.6148 8.0962 21.2205 11.9848 21.2205C15.8524 21.2205 19.1543 20.6348 19.1543 18.2938C19.1543 15.9529 15.8733 15.3462 11.9848 15.3462Z"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 3"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.9848 12.0059C14.5229 12.0059 16.58 9.94779 16.58 7.40969C16.58 4.8716 14.5229 2.81445 11.9848 2.81445C9.44667 2.81445 7.38858 4.8716 7.38858 7.40969C7.38001 9.93922 9.42382 11.9973 11.9524 12.0059H11.9848Z"
                            stroke="#130F26"
                            stroke-width="1.42857"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="title-nav-link">
                    <div className="text-nav-link">Profile</div>
                  </div>
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  className="icon-title-wrapper-navlink"
                  onClick={() => this.navigate(ROUTES.SETTINGS)}>
                  <div className="icon-nav-link">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <g id="icon_settings">
                        <g id="Setting">
                          <path
                            id="Path_33946"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20.8066 7.62355L20.1842 6.54346C19.6576 5.62954 18.4907 5.31426 17.5755 5.83866V5.83866C17.1399 6.09528 16.6201 6.16809 16.1307 6.04103C15.6413 5.91396 15.2226 5.59746 14.9668 5.16131C14.8023 4.88409 14.7139 4.56833 14.7105 4.24598V4.24598C14.7254 3.72916 14.5304 3.22834 14.17 2.85761C13.8096 2.48688 13.3145 2.2778 12.7975 2.27802H11.5435C11.0369 2.27801 10.5513 2.47985 10.194 2.83888C9.83666 3.19791 9.63714 3.68453 9.63958 4.19106V4.19106C9.62457 5.23686 8.77245 6.07675 7.72654 6.07664C7.40418 6.07329 7.08843 5.98488 6.8112 5.82035V5.82035C5.89603 5.29595 4.72908 5.61123 4.20251 6.52516L3.53432 7.62355C3.00838 8.53633 3.31937 9.70255 4.22997 10.2322V10.2322C4.82187 10.574 5.1865 11.2055 5.1865 11.889C5.1865 12.5725 4.82187 13.204 4.22997 13.5457V13.5457C3.32053 14.0719 3.0092 15.2353 3.53432 16.1453V16.1453L4.16589 17.2345C4.41262 17.6797 4.82657 18.0082 5.31616 18.1474C5.80575 18.2865 6.33061 18.2248 6.77459 17.976V17.976C7.21105 17.7213 7.73116 17.6515 8.21931 17.7821C8.70746 17.9128 9.12321 18.233 9.37413 18.6716C9.53867 18.9488 9.62708 19.2646 9.63043 19.5869V19.5869C9.63043 20.6435 10.4869 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9088 18.6 15.2681 18.2407C15.6274 17.8814 16.1154 17.6806 16.6236 17.6831C16.9451 17.6917 17.2596 17.7797 17.5389 17.9393V17.9393C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8066 16.1453C21.0617 15.7074 21.1317 15.1859 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6717 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8872 19.1602 11.3658 19.4153 10.9279C19.5812 10.6383 19.8213 10.3981 20.111 10.2322V10.2322C21.0161 9.70283 21.3264 8.54343 20.8066 7.63271V7.63271V7.62355Z"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <circle
                            id="Ellipse_737"
                            cx="12.175"
                            cy="11.889"
                            r="2.63616"
                            stroke="#130F26"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="title-nav-link">
                    <div className="text-nav-link">Settings</div>
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
