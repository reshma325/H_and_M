import React from 'react'
import "../component/Homepage.css"
import right from '../images/right_arrow.png'
import down from '../images/down.png'


const Homepage = () => {
  return (
    <div id='home_screen' >
      <div id='home_main'>
        <div id='t_bar'>
          <p>Members get free shipping above Rs.1999</p>
          <p>Free & flexible 15 days return</p>
          <p>Download the H&M App</p>

        </div>
        <div id='big_img_1'>
          <span id='span1'>
            <img src='https://image.hm.com/content/dam/TOOLBOX/inlocal/3x2_PINK_VALENTINE.jpg?imwidth=820' alt='' />
          </span>
          <div id='otherdiv'>
            <p>MEMBER DAYS</p>
            <h3>Get double points & win daily rewards</h3>
            <p> Join for a week full of member celebrations. Stay tuned!</p>
          </div>
          <div id='otherdiv_footer'>
            <ul>
              <li>Ladies</li>
              <li>Men</li>
              <li>Divided</li>
              <li>Kids & Baby</li>
              <li>Home</li>
              <li>Sports</li>

            </ul>
            <p>Valid online & in-store till 6th Oct'23</p>

          </div>
        </div>
        <div id='small_img_1'>
          <div id='small_img_1_head'>
            <h3>Win a wardrobe for a year</h3>
            <p>Members enter now to get 365 days of fabulous fashion from H&M! </p>

          </div>
          <div id='small_img_1_foot'>
            <p>Know More</p>
            <p>Join Now </p>

          </div>

        </div>
        <div id='image_1'>
          <span>
            <img src='https://image.hm.com/content/dam/global_campaigns/season_08/men/3078l/3078L-3x2.jpg?imwidth=820' alt='' />
          </span>
          <div id='otherdiv_2'>
            <div id='otherdiv_2_footer'>
              <h2>All knits needed</h2>
              <h3>Go nowhere without knitwear. Conquer the classic looks & coordinated layers.</h3>
              <p> Shop Now</p>
            </div>
            <div id='pop1_1'>
              <img src={right} alt='' />
            </div>
            <div id='pop1_2'>
              <p>Rs. 1,499.00</p>
              <p>Slim Fit Fine-knit pol... </p>
            </div  >
          </div>
        </div>

        <div id='row_img'>


          <div id='row_img_header'>
            <h3>
              Popular categories
            </h3>

          </div>
          <div id='row_img_body'>
            <div id='list1_main'>
              <div id='list1_1'>
                <div id='list1-img1'>
                  <img id='img1_1' src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10202.png?imwidth=124' alt='' />

                </div>
                <div id='list1_text1'>
                  <p>Ladies</p>
                  <p>Tops & T-shirts</p>
                </div>


              </div>
              <div id='list1_2'>
                <div id='list1-img2'>
                  <img id='img1_2' src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10201.png?imwidth=124' alt='' />

                </div>
                <div id='list1_text2'>
                  <p>Ladies</p>
                  <p>Trousers</p>
                </div>
              </div>
              <div id='list1_3'>
                <div id='list1-img3'>
                  <img id='img1_3' src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10245.png?imwidth=124' alt=' ' />

                </div>
                <div id='list1_text3'>
                  <p>Ladies</p>
                  <p>Clothes</p>
                </div>
              </div>
              <div id='list1_4'>
                <div id='list1-img4'>
                  <img id='img1_4' src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10231.png?imwidth=124' alt='' />

                </div>
                <div id='list1_text4'>
                  <p>Men</p>
                  <p>Hoodies & Sweatshirts</p>
                </div>
              </div>
              <div id='list1_5'>
                <div id='list1-img5'>
                  <img id='img1_5' src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10221.png?imwidth=124' alt='' />

                </div>
                <div id='list1_text5'>
                  <p>Men</p>
                  <p>Tops & T-shirts</p>
                </div>


              </div>
              <div id='list1_6'>
                <div id='list1-img6'>
                  <img id='img1_6' src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10220.png?imwidth=124' alt='' />

                </div>
                <div id='list1_text6'>
                  <p>Ladies</p>
                  <p>Accesories</p>
                </div>


              </div>
              <div id='list1_7'>
                <div id='list1-img7'>
                  <img id='img1_7' src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10208.png?imwidth=124' alt='' />

                </div>
                <div id='list1_text7'>
                  <p>Ladies</p>
                  <p>Shirts & Blouses</p>
                </div>


              </div>
              <div id='list1_8'>
                <div id='list1-img8'>
                  <img id='img1_8' src='https://image.hm.com/content/dam/TOOLBOX/project-me/personalizedentrances/10216.png?imwidth=124' alt='' />

                </div>
                <div id='list1_text8'>
                  <p>Ladies</p>
                  <p>Dresses</p>
                </div>


              </div>

            </div>

          </div>

        </div>
        <div id='small_img_2'>
          <div id='small_img_2_head'>
            <h3>A/W23 WARDROBE WINS</h3>
            <p>MKey staples for the season ahead!</p>

          </div>
          <div id='small_img_2_foot'>
            <p>Ladies</p>
            <p>Men</p>
            <p>Devided</p>
            <p>Kids</p>

          </div>


        </div>
        <div id='image_2'>
          <span>
            <img src='https://image.hm.com/content/dam/global_campaigns/season_08/divided/5088b/5088B-3x2-the-new-cabin-chic.jpg?imwidth=820' alt='' />
          </span>
          <div id='otherdiv_3'>
            <div id='otherdiv_3_footer'>
              <h2>It's cabin chic, but not really</h2>
              <h3>Styles inspired by the great outdoors.</h3>
              <p> Shop Now</p>
            </div>
            <div id='pop2_1'>
              <img src={right} alt='' />
            </div>
            <div id='pop2_2'>
              <p>Rs. 1,499.00</p>
              <p>Oversized jacquard-k...</p>
            </div >
          </div>
        </div>
        <div id='row_img_2'>
          <div id='row_img_2_header'>
            <h3>
              New Arrivals
            </h3>

          </div>
          <div id='row_img_2_header_button'>
            <button>Ladies</button>
            <button>Men</button>
            <button>Devided</button>
            <button>Kids</button>
            <button>H&M HOME</button>
            <button>Sport</button>


          </div>
          <div id='row_img_2_body'>
            <div id='list2_main'>
              <div id='list2_1'>
                <div id='list2-img1'>
                  <img id='img2_1' src='https://lp2.hm.com/hmgoepprod?set=source[/83/3c/833c11b3f60a06ee08a4a35039506c92a5a58bcd.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]' alt='' />

                </div>
                <div id='list2_text1'>
                  <p>Turtleneck thong body</p>
                  <p>Rs. 799.00</p>
                </div>


              </div>
              <div id='list2_2'>
                <div id='list2-img2'>
                  <img id='img2_2' src='https://lp2.hm.com/hmgoepprod?set=source[/b1/0e/b10e04a8d44a1ce10687685987dc55ea21475ee5.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]' alt='' />

                </div>
                <div id='list2_text2'>
                  <p>Rib-knit mermaid skirt</p>
                  <p>Rs. 2,299.00</p>
                </div>
              </div>
              <div id='list2_3'>
                <div id='list2-img3'>
                  <img id='img2_3' src='https://lp2.hm.com/hmgoepprod?set=source[/4a/e2/4ae2677655a7288be3ce7ce01611f7bcec2b9ef2.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]' alt=' ' />

                </div>
                <div id='list2_text3'>
                  <p>Knitted dress</p>
                  <p>Rs. 2,999.00</p>
                </div>
              </div>
              <div id='list2_4'>
                <div id='list2-img4'>
                  <img id='img2_4' src='https://lp2.hm.com/hmgoepprod?set=source[/82/de/82dea9143fe61a29be6e07b28f84e5d7efd39ec3.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]' alt='' />

                </div>
                <div id='list2_text4'>
                  <p>A-line lace dress</p>
                  <p>Rs. 6,999.00</p>
                </div>
              </div>

            </div>

          </div>



        </div>
        <div id='image_3'>
          <span>
            <img src='https://image.hm.com/content/dam/global_campaigns/season_08/kids/4078c/4078C-3x2-1.jpg?imwidth=820' alt='' />
          </span>
          <div id='otherdiv_4'>
            <div id='otherdiv_4_footer'>
              <h2>A/W 2023</h2>
              <h3>Cooler days call for knits, coats, and boots made for the outdoors.</h3>
              <p> Shop Now</p>
            </div>
            <div id='pop3_1'>
              <img src={down} alt='' />
            </div>
            <div id='pop3_2'>
              <p>Rs. 699.00</p>
              <p>Wrapover top
              </p>
            </div >
          </div>
        </div>
        <div id='image_4'>
          <span>
            <img src='https://image.hm.com/content/dam/TOOLBOX/PRE_SEASON/2023_s08/september_2023/TCL7223-3x2.jpg?imwidth=820' alt='' />
          </span>
          <div id='otherdiv_5'>
            <div id='otherdiv_5_footer'>
              <h2>Fashion that delivers</h2>
              <h3>Explore layers of autumn</h3>
              <p> Shop Now</p>
            </div>
            <div id='pop4_1'>
              <img src={right} alt='' />
            </div>
            <div id='pop4_2'>
              <p>Rs. 1,799.00</p>
              <p>Satin shirt</p>

            </div >
          </div>
        </div>
        <div id='image_5'>
          <span>
            <img src='https://image.hm.com/content/dam/global_campaigns/season_08/ladies/2018/2018-3x2-teaser-2-studio-aw-2023.jpg?imwidth=820' alt='' />
          </span>
          <div id='otherdiv_6'>
            <div id='otherdiv_6_footer'>
              <h2><img src='https://www2.hm.com/content/dam/global_campaigns/season_08/ladies/2018/2018-GEN-Logo-white-sans.png' alt='' /></h2>
              <h3>The A/W 2023 collection is out now.</h3>
              <div id='otherdiv_6_bt'>
                <p> SHOP NOW</p>
                <p> GET INSPIRED</p>
              </div>


            </div>
            <div id='pop5_1'>

            </div>
            <div id='pop5_2'>
              <p>Rs. 1,799.00</p>
              <p>Satin shirt</p>

            </div >
          </div>
        </div> <div id='row_img_3'>
          <div id='row_img_3_header'>
            <h3>
              Recently viewed
            </h3>

          </div>

          <div id='row_img_3_body'>
            <div id='list3_main'>
              <div id='list3_1'>
                <div id='list3-img1'>
                  <img id='img3_1' src='https://lp2.hm.com/hmgoepprod?set=source[/5c/48/5c48628e1fec13f334d4411ec8a993b8fa3459f8.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]' alt='' />

                </div>
                <div id='list3_text1'>
                  <p>Satin shirt</p>
                  <p>Rs. 1,799.00</p>
                </div>


              </div>
              <div id='list3_2'>
                <div id='list3-img2'>
                  <img id='img3_2' src='https://lp2.hm.com/hmgoepprod?set=source[/2f/24/2f2410b2cb8bb372286b4c12f04de5a5c01b46f1.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]' alt='' />

                </div>
                <div id='list3_text2'>
                  <p>Wrapover top</p>

                  <p>Rs. 699.00</p>
                </div>
              </div>
              <div id='list3_3'>
                <div id='list3-img3'>
                  <img id='img3_3' src='https://lp2.hm.com/hmgoepprod?set=source[/05/4b/054b2cfbdea774b3e7b6d3f192d934a89a626564.jpg],origin[dam],category[ladies_basics_tops_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]' alt=' ' />

                </div>
                <div id='list3_text3'>
                  <p>Oversized T-shirt</p>

                  <p>Rs. 699.00</p>
                </div>
              </div>
              <div id='list3_4'>
                <div id='list3-img4'>
                  <img id='img3_4' src='https://lp2.hm.com/hmgoepprod?set=source[/5d/e7/5de7939e051551efd1f33fd2d1f10afa7d67ce20.jpg],origin[dam],category[ladies_basics_tops_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]' alt='' />

                </div>
                <div id='list3_text4'>
                  <p>Oversized T-shirt</p>

                  <p>Rs. 699.00</p>
                </div>
              </div>

            </div>

          </div>



        </div>

      </div>

    </div>
  )
}

export default Homepage