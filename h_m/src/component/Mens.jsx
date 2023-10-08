import React from 'react'
import "./Mens.css"
import { useNavigate } from 'react-router-dom'
import right from '../images/right_arrow.png'

const Mens = () => {
  const router = useNavigate();
  return (
    <div id='men_screen'>
      <div id='men_breadcrumb'>
        <p onClick={() => router('/')}>HM.com /</p><span onClick={() => router('/mens')}>&nbsp; Men</span>
      </div>
      <div id='men_main'>
        <div id='men_sidenav'>
          <dl id='m_side1'>
            <dt>Member Exclusive Prices</dt>
            <dd>
              Shop Now
            </dd>
          </dl>
          <dl id='m_side2'>
            <dt>New Arrivals</dt>
            <dd> View All</dd>
            <dd>Clothes</dd>
            <dd>Shoes & Accessories</dd>
          </dl>
          <dl id='m_side3'>
            <dt>Trending now</dt>
            <dd>
              Trending now
            </dd>
          </dl>
          <dl id='m_side4'>
            <dt>Shop by Product</dt>
            <dd> View All</dd>
            <dd>T-shirts & Tops</dd>
            <dd>Hoodies & Sweatshirts</dd>
            <dd>Shirts</dd>
            <dd>Trousers</dd>
            <dd>Shoes</dd>
            <dd>Jeans</dd>
            <dd>Jackets & Coats</dd>
            <dd>Cardigans & Jumpers</dd>
            <dd>Shorts</dd>
            <dd>Basics</dd>
            <dd>Suits & Blazers</dd>
            <dd>Underwear & Innerwear</dd>
            <dd>Swimwear</dd>
            <dd>Socks</dd>
            <dd>Accessories</dd>
            <dd>Sportswear</dd>
            <dd>Care products</dd>
            <dd>Sleepwear & Loungewear</dd>
            <dd>Premium Selection</dd>
            <dd>Sale</dd>
            <dd></dd>
            <dd></dd>
          </dl>
          <dl id='m_side5'>
            <dt>Sustainability</dt>
            <dd>
              H&M Take Care

            </dd>
            <dd>
              Learn More
            </dd>
          </dl>


        </div>
        <div id='men_body'>
          <div id='m_small_img_1'>
            <div id='m_small_img_1_head'>
              <h3>Dress sharp, spend smart!</h3>
              <p>Everything under ₹1999 </p>

            </div>
            <div id='m_small_img_1_foot'>
              <p>Shop Now</p>


            </div>

          </div>
          <div id='m_image_1'>
            <span>
              <img src='https://image.hm.com/content/dam/global_campaigns/season_08/men/3078l/3078L-3x2.jpg?imwidth=820' alt='' />
            </span>
            <div id='m_otherdiv_2'>
              <div id='m_otherdiv_2_footer'>
                <h2>All knits needed</h2>
                <h3>Go nowhere without knitwear. Conquer the classic looks & coordinated layers.</h3>
                <p> Shop Now</p>
              </div>
              <div id='m_pop1_1'>
                <img src={right} alt='' />
              </div>
              <div id='m_pop1_2'>
                <p>Rs. 1,499.00</p>
                <p>Slim Fit Fine-knit pol... </p>
              </div  >
            </div>
          </div>
          <div id='m_row_img_1'>
            <div id='m_row_img_1_header'>
              <h3>
                New season, new looks!
              </h3>

            </div>

            <div id='m_row_img_1_body'>
              <div id='m_list1_main'>
                <div id='m_list1_1'>
                  <div id='m_list1-img1'>
                    <img id='m_img1_1' src='https://lp2.hm.com/hmgoepprod?set=source[/9a/ab/9aab209dfb5cd35b4b4fcce95a3fadbf1f7cbeed.jpg],origin[dam],category[men_hoodiessweatshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]' alt='' />

                  </div>
                  <div id='m_list1_text1'>
                    <p>Relaxed Fit Zip-...</p>
                    <p>Rs. 2,299.00</p>
                  </div>


                </div>
                <div id='m_list1_2'>
                  <div id='m_list1-img2'>
                    <img id='m_img1_2' src='https://lp2.hm.com/hmgoepprod?set=source[/e8/ba/e8baa968ff5222c997c2eb3af8c5fbc38f5bbc16.jpg],origin[dam],category[men_jacketscoats_shirtjackets],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]' alt='' />

                  </div>
                  <div id='m_list1_text2'>
                    <p>Twill overshirt
                    </p>

                    <p>Rs. 2,699.00</p>
                  </div>
                </div>
                <div id='m_list1_3'>
                  <div id='m_list1-img3'>
                    <img id='m_img1_3' src='https://lp2.hm.com/hmgoepprod?set=source[/97/ba/97ba4413e92cf6ccb761d5e96adccf4a6f9e19e6.jpg],origin[dam],category[men_jacketscoats_jackets],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]' alt=' ' />

                  </div>
                  <div id='m_list1_text3'>
                    <p>Oversized Fit B...</p>

                    <p>Rs. 3,999.00</p>
                  </div>
                </div>
                <div id='m_list1_4'>
                  <div id='m_list1-img4'>
                    <img id='m_img1_4' src='https://lp2.hm.com/hmgoepprod?set=source[/c8/64/c864fe53cb08ffc61c1f20d1b0035f781a05777e.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]' alt='' />

                  </div>
                  <div id='m_list1_text4'>
                    <p>Regular Fit Deni...</p>

                    <p>Rs. 2,699.00
                    </p>
                  </div>
                </div>
                <div id='m_list1_5'>
                  <div id='m_list1-img5'>
                    <img id='m_img1_5' src='https://lp2.hm.com/hmgoepprod?set=source[/a7/44/a74494dcda09dcc268390079a054ad496dcd03ff.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]' alt='' />

                  </div>
                  <div id='m_list1_text5'>
                    <p>Loose Fit Cargo...</p>

                    <p>Rs. 3,999.00</p>
                  </div>
                </div>
                <div id='m_list1_6'>
                  <div id='m_list1-img6'>
                    <img id='m_img1_6' src='https://lp2.hm.com/hmgoepprod?set=source[/cd/05/cd0555a5a3d0492f32ca44d00796b6fa7d681ba5.jpg],origin[dam],category[men_shirts_longsleeved],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]' alt='' />

                  </div>
                  <div id='m_list1_text6'>
                    <p>Regular Fit Flan</p>

                    <p>Rs. 1,999.00</p>
                  </div>
                </div>

              </div>

            </div>



          </div>
          <div id='m_small_img_2'>
            <div id='m_small_img_2_header'>
              <h3>
                Special treat: Member exclusive prices
              </h3>
              <p>
                Explore to enjoy exclusive styles for less!
              </p>

            </div>

          </div>
          <div id='m_image_2'>
            <span>
              <img src='https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/global_campaigns/season_08/men/3128/3128-v2-3x2-4-aw-2023-men.jpg]&scale=size[960]&sink=format[jpeg],quality[80]' alt='' />
            </span>
            <div id='m_otherdiv_3'>
              <div id='m_otherdiv_3_footer'>
                <img src='https://www2.hm.com/content/dam/global_campaigns/season_08/men/3128/3128-sans-Logo-White.png' alt='' />
                <p> Shop Now</p>
              </div>
              {/* <div id='m_pop2_1'>
                <img src={right} alt='' />
              </div>
              <div id='m_pop2_2'>
                <p>Rs. 1,499.00</p>
                <p>Slim Fit Fine-knit pol... </p>
              </div  > */}
            </div>
          </div>
          <div id='m_image_3'>
            <span>
              <img src='https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/TOOLBOX/PRE_SEASON/2023_s08/september_2023/TCM8028_3x2.jpg]&scale=size[960]&sink=format[jpeg],quality[80]' alt='' />
            </span>
            <div id='m_otherdiv_4'>
              <div id='m_otherdiv_4_footer'>
                <h2>Wear the attitude, own the street  </h2>
                <h3>Explore our new arrivals</h3>

                <p> Shop Now</p>
              </div>
              {/* <div id='m_pop2_1'>
                <img src={right} alt='' />
              </div>
              <div id='m_pop2_2'>
                <p>Rs. 1,499.00</p>
                <p>Slim Fit Fine-knit pol... </p>
              </div  > */}
            </div>
          </div>
          <div id='m_header'>
            <h1>Men's Clothing</h1>

          </div>
          <div id='m_para'>
            <p>Check out all the freshest styles your closet needs in our men's clothing range. You'll find a roundup of everyday essentials, including tops and T-Shirts, as well as comfy lounge sets and underwear. Formal event coming up? Scroll no further than our men's blazers and suits for the sharpest looks and nail the dress code. When it comes to men's pants, there's chinos, joggers and cargo styles in all the staple colors. dreaming of denim? our<span> men's</span> </p>
            <p>Read more</p>


          </div>


        </div>

      </div>

    </div>
  )
}

export default Mens
