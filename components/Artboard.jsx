import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Ratio from "react-bootstrap/Ratio";
import InputGroup from "react-bootstrap/InputGroup";

const Artboard = () => {
  return (
    <div id="products" className="artBoard">
      <div style={{ backgroundColor: "white", paddingBottom: 90, width: "100%" }}>
        <p className="artBoard_title"> OUR TOP SAUCES</p>
        <div className="artBoard_des">
          <p>The most loved hot sauce in Vietnam, freshly made from the pungent, crispy Bird's eye chili shall adda kick of heat and robust flavor to your everyday meal!</p>
        </div>
        <div className="artBoard_topSauce" style={{ width: "100%" }}>
          <Row style={{ width: "100%" }} className="topSauce">
            <Col className="topSauce_col">
              <Image className="topSauce_img" src="/KV.png"></Image>
              <h1 className="topSauce_img_title"> PHO HOT SAUCE</h1>
            </Col>
            <Col className="topSauce_col">
              <Image className="topSauce_img" src="/BBQ_POURING.png"></Image>
              <h1 className="topSauce_img_title"> ORIGINAL HOT SAUCE</h1>
            </Col>
            <Col className="topSauce_col">
              <Image className="topSauce_img" src="/NUDGET_2.png"></Image>
              <h1 className="topSauce_img_title"> "CHI THIEN" HOT SAUCE</h1>
            </Col>
            <Col className="topSauce_col">
              <Image className="topSauce_img" src="/NUDGET_1.png"></Image>
              <h1 className="topSauce_img_title"> TRUFFLE HOT SAUCE</h1>
            </Col>
          </Row>
        </div>
      </div>

      {/* INTRODUCE */}
      <div className="introduce">
        <div id="recipes" className="artBoard_introduce" style={{ width: "100%" }}>
          <div className="introduce_left" style={{ position: "relative", width: "50%" }}>
            <Image className="introduce_img" src="/KV_1200x628@2x.png"></Image>
          </div>
          <div className="introduce_right" style={{ width: "50%" }}>
            <div style={{ marginLeft: "10%", marginTop: "5%" }}>
              <p className="introduce_title">PHO HOT SAUCE</p>
              <p className="introduce_des">THE STAPLE SAUCE FOR VIETNAMESE BEST LOVED CUISINE</p>
              <div style={{ display: "flex", marginTop: 30 }}>
                <div className="introduce_mark">
                  <p className="number">01</p>
                </div>
                <p style={{ width: "80%", float: "right" }} className="introduce_content">
                  Using traditional fermentation method, our Master chefs & Vietnamese folk craftsman have successfully created the one Asian hot sauce to go with Vietnamese traditional Phở & do it justice. There’s no better way to eat Vietnamese Phở like a Pro than to enjoy it with its true
                  companion - CHIN-SU Original Phở Hot Sauce. It has that “tangy and savory” flavor, it offers a pleasant spicy tingle in your mouth. It adds just the perfect balance of spiciness, acidity, and natural sweetness to make your bowl of Phở interesting.
                </p>
              </div>
              <div style={{ display: "flex", marginTop: 30 }}>
                <div className="introduce_mark">
                  <p className="number">02</p>
                </div>
                <p style={{ width: "80%", float: "right" }} className="introduce_content">
                  As you drizzle CHIN-SU Phở Hot Sauce into the delicate broth of Phở, the first thing you'll notice is its aromatic smell. Just like the savory spiciness that lingers in the air, so it will on your tastebuds as well!
                </p>
              </div>
            </div>
            <div style={{ paddingLeft: "10%" }}>
              <Button className="order_btn">
                ORDER NOW <BsFillArrowRightCircleFill className="arr_btn" style={{ marginLeft: "5%", marginBottom: "2%" }} />
              </Button>
            </div>
          </div>
        </div>
        <div className="artBoard_introduce" style={{ width: "100%" }}>
          <div className="introduce_right" style={{ width: "50%", backgroundColor: "hsla(4, 62%, 41%, 1)" }}>
            <div style={{ marginLeft: "10%", marginTop: "5%" }}>
              <p className="introduce_title">ORIGINAL HOT SAUCE</p>
              <p className="introduce_des">HOT SAUCE FOR SPECIALTY OF VIETNAMESE CUISINE</p>
              <p className="introduce_des" style={{ fontFamily: "BalooThambi2", fontSize: 16 }}>
                The most loved hot sauce in Vietnam, freshly made from the pungent, crispy Bird's eye chili shall adda kick of heat and robust flavor to your everyday meal!
              </p>
              <div style={{ display: "flex" }}>
                <div className="introduce_mark">
                  <p className="number">01</p>
                </div>
                <p style={{ width: "80%", float: "right" }} className="introduce_content">
                  Not too spicy to overwhelm the original food taste, just the sound balance of flavour that can elevate any dish and make you crave for it even more
                </p>
              </div>
              <div style={{ display: "flex", paddingTop: 50 }}>
                <div className="introduce_mark">
                  <p className="number">02</p>
                </div>
                <p style={{ width: "80%", float: "right" }} className="introduce_content">
                  The most loved hot sauce in Vietnam, freshly made from the pungent, crispy Bird's eye chili shall adda kick of heat and robust flavor to your everyday meal!
                </p>
              </div>
              <div className="icon_group" style={{ margin: "30px auto" }}>
                <Row xs="auto" className="group_items">
                  <Col className="item">
                    <Image className="icon_img" src="/1@2x.png"></Image>
                    <h1 className="icon_title"> SCOVILLE HEAT UNIT</h1>
                  </Col>
                  <Col className="item">
                    <Image className="icon_img" src="/2.png"></Image>
                    <h1 className="icon_title"> GLUTEN FREE</h1>
                  </Col>
                  <Col className="item">
                    <Image className="icon_img" src="/3.png"></Image>
                    <h1 className="icon_title"> "VEGAN</h1>
                  </Col>
                  <Col></Col>
                </Row>
              </div>
            </div>
            <div style={{ paddingLeft: "10%" }}>
              <Button className="order_btn" style={{ borderColor: "white" }}>
                ORDER NOW <BsFillArrowRightCircleFill className="arr_btn" style={{ marginLeft: "5%", marginBottom: "2%" }} />
              </Button>
            </div>
          </div>
          <div className="introduce_left" style={{ position: "relative", width: "50%" }}>
            <Image className="introduce_img" src="/FRIED_RICE@2x2.png"></Image>
          </div>
        </div>
        <div className="artBoard_introduce" style={{ width: "100%" }}>
          <div className="introduce_left" style={{ position: "relative", width: "50%" }}>
            <Image className="introduce_img" src="/20220717 CHIN-SU24741@2x.png"></Image>
          </div>
          <div className="introduce_right" style={{ width: "50%" }}>
            <div style={{ marginLeft: "10%", marginTop: "5%" }}>
              <p className="introduce_title">"CHI THIEN" HOT SAUCE</p>
              <p className="introduce_des">EXTRA HOT - TRY & CRY</p>
              <div style={{ display: "flex" }}>
                <div className="introduce_mark">
                  <p className="number">01</p>
                </div>
                <p style={{ width: "80%", float: "right" }} className="introduce_content">
                  Behold the brand-new pinnacle of heat from CHIN-SU spicy universe! With the fiery heat from “Chỉ Thiên” chili peppers that can go up to 250,000SHU, just a dash of CHIN-SU “CHỈ THIÊN” Hot Sauce can go a long way in adding a good kick to your meals. So, if you're a fan of the “extra
                  hot" profile, this is the one sauce you really must try!{" "}
                </p>
              </div>
              <div style={{ display: "flex", paddingTop: 50 }}>
                <div className="introduce_mark">
                  <p className="number">02</p>
                </div>
                <p style={{ width: "80%", float: "right" }} className="introduce_content">
                  Add a surprising little kick to your salad dressing for Green Thai Papaya Salad; mix it with your dipping sauce for a mouthful taste of spicy delicious Spring rolls, Dim sum & Dumpling; use it as a glaze for your Korean Barbeque Chicken, squeeze it into your Taco, Burrito or
                  Enchilada for a delightful flavor experience, etc. Anyhow you choose to pair it with, you should be prepared for an instant sensation.{" "}
                </p>
              </div>
            </div>
            <div style={{ paddingLeft: "10%" }}>
              <Button className="order_btn">
                ORDER NOW <BsFillArrowRightCircleFill className="arr_btn" style={{ marginLeft: "5%", marginBottom: "2%" }} />
              </Button>
            </div>
          </div>
        </div>
        <div className="artBoard_introduce" style={{ width: "100%" }}>
          <div className="introduce_right" style={{ width: "50%", backgroundColor: "hsla(4, 62%, 41%, 1)" }}>
            <div style={{ marginLeft: "10%", marginTop: "5%" }}>
              <p className="introduce_title">TRUFFLE HOT SAUCE</p>
              <p className="introduce_des">CHIN-SU EXTRA HOT CHILI SAUCE FROM RIPE “CHI THIEN" CHILI PEPPERS</p>
              <div style={{ display: "flex" }}>
                <div className="introduce_mark">
                  <p className="number">01</p>
                </div>
                <p style={{ width: "80%", float: "right" }} className="introduce_content">
                  The rare delicious “black diamond” & also king of the Western culinary - “Truffle” is now paired with the Asian cornerstone - “Chỉ Thiên'' hot chili peppers to create the staple hot sauce for haute cuisine.
                </p>
              </div>
              <div style={{ display: "flex", paddingTop: 50 }}>
                <div className="introduce_mark">
                  <p className="number">02</p>
                </div>
                <p style={{ width: "80%", float: "right" }} className="introduce_content">
                  It has that nice kick from “Chỉ Thiên” chili peppers, but really well-balanced, with delicious earthy and buttery undertones that stay with you and make you happy. It offers a tiny bit of after burn - a pleasant reminder that CHIN-SU Original Truffle Hot Sauce just rocked your
                  palate with a full-bodied umami flavor. The synergy between spiciness and savory sweetness captured in one sophisticated hot sauce bottle lasts from start to finish. What lingers afterwards is the complex flavor profile riches in Truffle aroma and delicious heat that dances around
                  your mouth and teases your taste buds with delight.
                </p>
              </div>
              <div style={{ display: "flex", paddingTop: 50 }}>
                <div className="introduce_mark">
                  <p className="number">03</p>
                </div>
                <p style={{ width: "80%", float: "right" }} className="introduce_content">
                  Best enjoyed with Tomahawk, BBQ, grilled meat & all kinds of culinary masterpieces for refined gourmet dining experiences.
                </p>
              </div>
            </div>
            <div style={{ paddingLeft: "10%" }}>
              <Button className="order_btn" style={{ borderColor: "white" }}>
                ORDER NOW <BsFillArrowRightCircleFill className="arr_btn" style={{ marginLeft: "5%", marginBottom: "2%" }} />
              </Button>
            </div>
          </div>
          <div className="introduce_left" style={{ position: "relative", width: "50%" }}>
            <Image className="introduce_img" src="/FRIED_RICE@2x.png"></Image>
          </div>
        </div>
      </div>

      {/* VIDEO LIST */}
      <div id="gallery">
        <p className="artBoard_title" style={{ color: "white" }}>
          {" "}
          THE ORIGINAL VIETNAMESE HOT SAUCE
        </p>
        <div className="artBoard_des" style={{ color: "white" }}>
          <p>The most loved hot sauce in Vietnam, freshly made from the pungent, crispy Bird's eye chili shall adda kick of heat and robust flavor to your everyday meal!</p>
        </div>
        <Ratio aspectRatio="16x9" style={{ margin: "50px auto" }}>
          <iframe width="1280" height="720" src="https://www.youtube.com/embed/q3F3131WdVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Ratio>

        <div className="video_list" style={{ width: "100%"}}>
          <Row style={{ width: "100%" }} className="list">
            <Col className="video" >
              <Image className="videoThumbnail" src="/videoThumbnail.png"></Image>
            </Col>
            <Col className="video">
              <Image className="videoThumbnail" src="/videoThumbnail.png"></Image>
            </Col>
            <Col className="video">
              <Image className="videoThumbnail" src="/videoThumbnail.png"></Image>
            </Col>
          </Row>
        </div>
      </div>
      {/* FOOTER BANNER */}
      <div style={{ width: "100%" }}>
        <Image className="footer_banner" src="/7@2x.png"></Image>
      </div>
      {/* SUBCRIBE FORM */}
      <div id="whereToBuy" className="subcribe_form" style={{ backgroundColor: "white", marginTop: -50 }}>
        <br></br>
        <p className="artBoard_title" style={{ marginTop: 50 }}>
          {" "}
          SUBSCRIBE US TO GET MORE INFO
        </p>
        <div className="artBoard_des">
          <p>Want the latest and greatest recipes, updates, and more from us, straight to your inbox? Chuck us your detail and get a sweet weekly email!</p>
        </div>
        <InputGroup className="input_group">
          <input style={{ backgroundColor: "#A82F27" }} placeholder="Enter your email..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <Button className="submit_btn" variant="outline-secondary" id="button-addon2">
            SUBMIT
          </Button>
        </InputGroup>
      </div>

      {/* FOOTER*/}
      <footer>
        <div className="footer">
          <div className="column_info" style={{ marginLeft: "17%", width: "15%" }}>
            <div>
              <Image src="/logo.png" width={200} height={100}></Image>
            </div>
            <div className="info" style={{ paddingTop: "10%" }}>
              <div style={{ width: "20%", paddingTop: "5%" }}>
                <Image src="/MaskGroup129.svg" width={24} height={24}></Image>
              </div>
              <div>
                <p className="info_txt"> CHINSU store system 1000+ Stores nationwide</p>
              </div>
            </div>
            <div className="info">
              <div style={{ width: "20%", paddingTop: "5%" }}>
                <Image src="/MaskGroup130.svg" width={24} height={24}></Image>
              </div>
              <div>
                <p className="info_txt"> Have a chat with us if you need help</p>
              </div>
            </div>
            <div className="info">
              <div style={{ width: "20%", paddingTop: "5%" }}>
                <Image src="/MaskGroup131.svg" width={24} height={24}></Image>
              </div>
              <div>
                <p className="info_txt"> Customer Service Center 1800 89 89</p>
              </div>
            </div>
          </div>
          <div className="column_social" style={{ marginLeft: "10%" }}>
            <div className="footer_title">social</div>
            <div className="info">
              <div style={{ width: "15%" }}>
                <Image src="/MaskGroup154.svg" width={20} height={20}></Image>
              </div>
              <div>
                <p> FACEBOOK</p>
              </div>
            </div>
            <div className="info">
              <div style={{ width: "15%" }}>
                <Image style={{ color: "white" }} src="/instagram.svg" width={20} height={20}></Image>
              </div>
              <div>
                <p> INSTAGRAM</p>
              </div>
            </div>
            <div className="info">
              <div style={{ width: "15%" }}>
                <Image src="/MaskGroup157.svg" width={20} height={20}></Image>
              </div>
              <div>
                <p> YOUTUBE</p>
              </div>
            </div>
            <div className="info">
              <div style={{ width: "15%" }}>
                <Image src="/MaskGroup158.svg" width={20} height={20}></Image>
              </div>
              <div>
                <p> TWITTER</p>
              </div>
            </div>
            <div className="info">
              <div style={{ width: "15%" }}>
                <Image src="/MaskGroup159.svg" width={20} height={20}></Image>
              </div>
              <div>
                <p> TIKTOK</p>
              </div>
            </div>
          </div>
          <div className="column_link" style={{ marginLeft: "5%" }}>
            <div className="footer_title">SHOP</div>
            <p> SAUCE</p>
            <p> MAYO</p>
            <p> PASTA SAUCE</p>
            <p> GIFTS</p>
          </div>
          <div className="column_link" style={{ marginLeft: "5%" }}>
            <div className="footer_title">EXPLORE</div>
            <p> FIND A STORE</p>
            <p> SUBSCRIPTIONS</p>
            <p> REWARDS</p>
            <p> CHINSU KITCHEN</p>
            <p> THE SAUCE</p>
          </div>
          <div className="column_link" style={{ marginLeft: "5%" }}>
            <div className="footer_title">COMPANY</div>
            <p> CONTACT US</p>
            <p> FAQS</p>
            <p> RETURNS</p>
            <p> PRIVACY POLICY</p>
            <p> ACCESIBILITY</p>
            <p> CCPA</p>
            <p> TERMS OF USE</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Artboard;
