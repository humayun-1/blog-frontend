import React from 'react'

const AddBlog = () => {
  return (
    <div class="nstyle-container">
    <div class="grid grid-cols-11">
      <div
        class="col-span-2 border-r lg:block h-[100vh] lg:sticky fixed top-0 bg-white responsive_sidebar hidden"
      >
        <div
          class="xl:py-[2.5rem] py-[1rem] flex flex-col gap-[2rem] h-[100vh] overflow-auto"
        >
          <div class="xl:px-[2rem] px-[1rem] flex items-center gap-4">
            <div class="flex items-center gap-3 cursor-pointer flex-wrap">
              <svg
                width="4.25rem"
                height="4.56rem"
                viewBox="0 0 68 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_51_4)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M38.9616 0C44.1843 2.38607 45.9252 5.74041 45.4378 9.26764C44.6718 12.5874 41.3641 15.5268 38.7875 17.325C33.3907 21.0943 25.5914 24.3794 18.9411 22.3046C13.7532 20.6793 14.9022 14.8006 14.7977 15.423C14.3103 17.9128 14.8674 20.6793 16.9217 22.3738C18.767 23.8953 21.9355 24.3103 24.2683 24.3103C26.3574 24.3103 28.4813 23.9299 30.5356 23.4112C29.2473 24.0682 27.9242 24.6907 26.5663 25.2094C21.065 27.2842 16.469 26.4197 11.7686 27.5955C3.13364 29.7395 0 37.8314 0 37.8314C0 37.8314 3.86482 29.6703 19.6027 30.0853C19.7071 30.0853 20.0553 30.1198 20.1946 30.1198C14.0317 34.2004 10.6196 40.0445 16.5038 52.9777C15.2852 34.235 33.2166 32.7826 42.9309 27.4917C57.7286 19.469 58.7732 3.73472 38.9616 0Z"
                    class="fill-primary"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M59.3999 40.8399C62.0809 42.4306 64.1004 42.8456 68 42.6727L66.6421 41.9465C64.7967 41.1511 64.4834 40.9436 62.8121 39.7679C57.3108 35.6873 57.8679 27.0767 57.4501 20.9214C57.1716 17.4287 56.7537 14.1781 55.6047 11.3079C55.2914 10.5471 54.2468 9.02557 54.2468 9.02557C55.9181 14.6622 55.7788 17.7745 52.4711 24.5523C48.85 31.9872 55.6047 36.0677 50.5909 36.7593C47.1439 37.2435 48.084 37.8314 48.2581 39.6296C48.3625 40.8399 47.5965 40.909 46.2386 41.0474C46.4475 43.3297 46.5868 43.0185 44.6022 43.3297C42.5131 43.6409 44.4629 48.4476 40.2151 47.514C37.5689 46.9261 36.0021 44.3671 32.3113 44.4363C23.2586 53.3235 37.9171 59.1331 43.3487 72.1701C44.254 66.6717 37.5689 58.9256 45.9253 53.6348C43.488 60.2397 43.1398 68.2624 49.4419 73.0346C48.9544 71.3055 48.0144 69.6111 47.8054 67.4671C47.4921 64.4931 47.7358 61.0696 48.6063 58.3032C52.5407 45.3354 47.318 66.3259 61.106 68.6428C58.2161 65.5651 56.5796 63.8361 56.893 58.4069C57.4153 49.4159 57.2412 48.6551 55.6744 44.7821C56.0574 45.7158 59.574 47.7215 61.8024 51.802C64.3789 56.5396 63.1255 58.234 62.638 62.937C69.8802 48.4131 59.1214 46.6494 59.3999 40.8399Z"
                    class="fill-primary"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M26.4967 5.04878C26.6011 4.94504 28.2376 6.74324 29.7348 9.61344C29.7348 9.57886 29.7348 9.54428 29.7348 9.54428C30.7445 3.00852 22.6667 0.691607 20.3339 0.311218C23.9201 3.18142 24.2335 12.5182 29.3866 10.9275C28.2376 8.57602 27.0538 6.01704 26.4967 5.04878Z"
                    class="fill-primary"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M34.2612 7.53862C33.3907 8.43772 32.7292 9.09475 31.7194 11.4808C31.7194 11.4462 31.7194 11.4462 31.7194 11.4117C30.6749 5.98248 38.2304 3.94222 39.5883 3.80389C37.1859 6.29371 34.9923 15.0426 32.1024 12.5874C32.5551 10.3397 33.6692 8.50688 34.2612 7.53862Z"
                    class="fill-primary"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.3727 14.2818C25.7307 13.694 26.7752 13.2444 29.9088 13.1407C29.874 13.1407 29.874 13.1061 29.8392 13.1061C24.1986 9.61344 18.6974 17.1175 17.9662 18.5699C21.7962 16.9791 33.2862 17.6016 30.9882 14.0398C28.2376 13.5902 25.6958 14.0398 24.3727 14.2818Z"
                    class="fill-primary"
                  ></path>
                  <path
                    class="fill-primary"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.64618 24.6561C2.681 24.5524 4.63082 24.3795 5.46646 23.7224C6.54582 23.1 5.29236 21.9588 3.20327 23.9645C2.99436 24.172 2.82027 24.414 2.64618 24.6561Z"
                  ></path>
                  <path
                    class="fill-primary"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.17816 19.3307C6.26726 19.0886 7.20735 17.982 9.05271 17.8091C11.2114 17.6016 11.6989 21.1634 6.71989 20.1606C5.60571 19.9531 4.66562 19.5036 4.17816 19.3307Z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_51_4">
                    <rect width="68" height="73" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <h1 class="text-primary font-semibold text-2xl">NSTYLE</h1>
            </div>
            <div class="cursor-pointer lg:hidden block">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                stroke="#878C93"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>
          <div
            class="xl:px-[2rem] px-[1rem] flex flex-col gap-2 overflow-y-auto scroll-hidden-lg flex-1 lg:mb-0 mb-[4rem] lg:pb-0 pb-[1rem]"
           >
            <a href='{% url "DashboardPage" %}'
              class="px-3 py-4 active_sidebar  cursor-pointer rounded-lg flex items-center gap-3"
            >
              <svg
                width="1.31rem"
                height="1.31rem"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
               >
                <path
                  d="M18.3333 7.1013V3.31797C18.3333 2.14297 17.8 1.66797 16.475 1.66797H13.1083C11.7833 1.66797 11.25 2.14297 11.25 3.31797V7.09297C11.25 8.2763 11.7833 8.74297 13.1083 8.74297H16.475C17.8 8.7513 18.3333 8.2763 18.3333 7.1013Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3333 16.475V13.1083C18.3333 11.7833 17.8 11.25 16.475 11.25H13.1083C11.7833 11.25 11.25 11.7833 11.25 13.1083V16.475C11.25 17.8 11.7833 18.3333 13.1083 18.3333H16.475C17.8 18.3333 18.3333 17.8 18.3333 16.475Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.74935 7.1013V3.31797C8.74935 2.14297 8.21602 1.66797 6.89102 1.66797H3.52435C2.19935 1.66797 1.66602 2.14297 1.66602 3.31797V7.09297C1.66602 8.2763 2.19935 8.74297 3.52435 8.74297H6.89102C8.21602 8.7513 8.74935 8.2763 8.74935 7.1013Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.74935 16.475V13.1083C8.74935 11.7833 8.21602 11.25 6.89102 11.25H3.52435C2.19935 11.25 1.66602 11.7833 1.66602 13.1083V16.475C1.66602 17.8 2.19935 18.3333 3.52435 18.3333H6.89102C8.21602 18.3333 8.74935 17.8 8.74935 16.475Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="text-sm">Dashboard</p>
            </a>
  
            <a 
              class="px-3 py-4 active_sidebar cursor-pointer rounded-lg flex items-center gap-3"
            >
              <svg
                width="1.313rem"
                height="1.313rem"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.34428 2.25391H16.6541C17.9959 2.25391 19.096 3.33319 19.096 4.65262V15.3447C19.096 16.6627 17.9973 17.7434 16.6541 17.7434H3.34428C2.00107 17.742 0.902344 16.6627 0.902344 15.3447V4.65262C0.902344 3.33319 2.00107 2.25391 3.34428 2.25391Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.94531 2.25391V17.742"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.07031 6.74609H5.15365"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.4258 6.74609H16.0508"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.07031 10.2539H5.15365"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.4258 10.2539H16.0508"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.4258 13.7656H12.673"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.07031 13.7656H5.15365"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="text-sm">Exception Records</p>
            </a>
            <a href='{% url "LanguagePage" %}'
              class="px-3 py-4 active_sidebar cursor-pointer rounded-lg flex items-center gap-3"
            >
              <svg
                width="1.31rem"
                height="1.31rem"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
               >
                <path
                  d="M14 19C17.771 19 19.657 19 20.828 17.828C22 16.657 22 14.771 22 11C22 7.229 22 5.343 20.828 4.172C19.657 3 17.771 3 14 3H10C6.229 3 4.343 3 3.172 4.172C2 5.343 2 7.229 2 11C2 14.771 2 16.657 3.172 17.828C3.825 18.482 4.7 18.771 6 18.898"
                  stroke="#000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0002 19C12.7642 19 11.4022 19.5 10.1592 20.145C8.16124 21.182 7.16224 21.701 6.67024 21.37C6.17824 21.04 6.27124 20.015 6.45824 17.966L6.50024 17.5"
                  stroke="#000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M5.5 13.5L6.5 11.5M6.5 11.5L7.606 9.289C7.68914 9.12312 7.81679 8.98364 7.97467 8.88617C8.13256 8.78869 8.31445 8.73707 8.5 8.73707C8.68555 8.73707 8.86744 8.78869 9.02532 8.88617C9.18321 8.98364 9.31086 9.12312 9.394 9.289L10.5 11.5M6.5 11.5H10.5M10.5 11.5L11.5 13.5M12.5 7.5H14.482V9C14.482 9.5 13.986 10.5 12.995 10.5M16.959 7.5V9.5M16.959 9.5V13.5M16.959 9.5H18.5"
                  stroke="#000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="text-sm">Languages</p>
            </a>
  
  
            <a href='/api/v1/help/view_content/'>
            <div
             class="px-3 py-4 active_sidebar cursor-pointer rounded-lg flex items-center gap-3"
             >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                <p class="text-sm">Help center</p>
             </div>
            </a>
  
  
            <div
              class="px-3 py-4 active_sidebar cursor-pointer rounded-lg flex items-center gap-3"
            >
              <svg
                width="1.313rem"
                height="21"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3320_26546)">
                  <path
                    d="M11.4274 9.83146C11.0263 9.83146 10.7021 10.1565 10.7021 10.5568V13.4584C10.7021 13.858 10.3771 14.1837 9.97665 14.1837H7.80054V3.30313C7.80054 2.68366 7.40593 2.1302 6.81263 1.9242L6.59786 1.85234H9.97665C10.3771 1.85234 10.7021 2.17801 10.7021 2.5778V4.75391C10.7021 5.15423 11.0263 5.47924 11.4274 5.47924C11.8285 5.47924 12.1528 5.15423 12.1528 4.75391V2.5778C12.1528 1.37804 11.1764 0.401688 9.97665 0.401688H2.17896C2.15133 0.401688 2.12822 0.41404 2.10139 0.417626C2.06646 0.414704 2.03312 0.401688 1.99766 0.401688C1.19756 0.401688 0.546875 1.05224 0.546875 1.85234V14.909C0.546875 15.5285 0.941481 16.0819 1.53479 16.2879L5.90016 17.7431C6.04812 17.7888 6.19528 17.8106 6.34988 17.8106C7.14999 17.8106 7.80054 17.1599 7.80054 16.3598V15.6345H9.97665C11.1764 15.6345 12.1528 14.6581 12.1528 13.4584V10.5568C12.1528 10.1565 11.8285 9.83146 11.4274 9.83146Z"
                    fill="#101928"
                  ></path>
                  <path
                    d="M17.7432 7.14252L14.8416 4.24108C14.6343 4.03362 14.3223 3.97119 14.0511 4.08356C13.7805 4.19606 13.6035 4.46076 13.6035 4.7539V6.93001H10.702C10.3016 6.93001 9.97656 7.25488 9.97656 7.65534C9.97656 8.05579 10.3016 8.38066 10.702 8.38066H13.6035V10.5568C13.6035 10.8499 13.7805 11.1146 14.0511 11.2271C14.3223 11.3395 14.6343 11.2771 14.8416 11.0697L17.7432 8.16815C18.0267 7.88458 18.0267 7.42609 17.7432 7.14252Z"
                    fill="#101928"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3320_26546">
                    <rect
                      width="17.4091"
                      height="17.4091"
                      fill="white"
                      transform="translate(0.546875 0.401443)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <p class="text-sm"><a href="/super-admin/logout">Logout</a></p>
            </div>
           
          </div>
        </div>
      </div>
      <div
        class="fixed inset-0 bg-black/20 z-[1] overlay_responsive backdrop-blur-[2px] hidden"
      ></div>
      <div class="col-span-11 lg:col-span-9 overflow-hidden px-0 min-h-[100vh]">
        <div
          class="lg:px-[2rem] lg:py-[2.5rem] py-[1.3rem] px-[1rem] no_padding_parent h-full bounce-in-right"
        >
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddBlog