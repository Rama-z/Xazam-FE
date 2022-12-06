import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

// React-Bootsrap
import Form from "react-bootstrap/Form";

// Import Image
import ebu from "../../assets/images/ebu.png";
import hiflix from "../../assets/images/hiflix.png";
import cineone from "../../assets/images/cineone.png";
import chart from "src/assets/images/Chart.png";
import xxi from "src/assets/images/XXI.webp";
import cgv from "src/assets/images/cgv.png";
import platinum from "src/assets/images/cine.png";
import defaultImage from "../../assets/images/default.png";
import axios from "axios";

import Loading from "components/Loading/Loading";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const myLoader = ({ src, width, quality }) => {
  return `}${src}?w=${width}&q=${quality || 75}`;
};

function Index() {
  const [selectEbu, setEbu] = useState(false);
  const [selectHiflix, setHiflix] = useState(false);
  const [selectCineOne, setCineOne] = useState(false);
  const [selectXXI, setXXI] = useState(false);
  const [selectCgv, setCgv] = useState(false);
  const [selectPlatinum, setPlatinum] = useState(false);

  const [selectTime1, setTime1] = useState(false);
  const [selectTime2, setTime2] = useState(false);
  const [selectTime3, setTime3] = useState(false);
  const [selectTime4, setTime4] = useState(false);
  const [selectTime5, setTime5] = useState(false);
  const [selectTime6, setTime6] = useState(false);

  const [selectStudios, setStudios] = useState(false);
  const [selectTime, setTime] = useState(false);
  const [isAllowed, setAllowed] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [AllowedSave, setSave] = useState(false);
  const [modalCategory, setCategory] = useState(false);
  const [displayCategory, setDisplay] = useState();

  const [showTimes, setShow] = useState([]);
  const [body, setBody] = useState();
  const [inputHour, setHour] = useState();
  const [inputMinute, setMinute] = useState();
  const [image, setImage] = useState();
  const [inputCategory, setInputCategory] = useState();

  const [action, setAction] = useState(false);
  const [adventure, setAdventure] = useState(false);
  const [sci, setSci] = useState(false);
  const [fantasy, setFantasy] = useState(false);
  const [comedy, setComedy] = useState(false);
  const [drama, setDrama] = useState(false);
  const [horror, setHorror] = useState(false);
  const [romance, setRomance] = useState(false);
  const [thriller, setThriller] = useState(false);
  const [mystery, setMystery] = useState(false);
  const [kids, setKids] = useState(false);

  const token = useSelector((state) => state.auth.userData.token);
  const role = useSelector((state) => state.auth.userData.role);
  const router = useRouter();

  useEffect(() => {
    if (role === "user" || role === null) router.push("/home");
  }, [role, router]);

  const saveHandler = () => {
    setLoading(true);
    let bodys = new FormData();
    let duration = `${inputHour}:${inputMinute}`;
    bodys.append("image", image);
    bodys.append("title", body.title);
    bodys.append("category", inputCategory);
    bodys.append("date", body.date);
    bodys.append("duration", duration);
    bodys.append("director", body.director);
    bodys.append("casts", body.cast);
    bodys.append("synopsis", body.synopsis);
    bodys.append("start_show", body.start_show);
    bodys.append("end_show", body.end_show);
    bodys.append("showtimes", JSON.stringify(showTimes).replace(/\"/g, ""));
    const baseUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/xazam/movie/create-movie`;
    const Header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(baseUrl, bodys, Header)
      .then((results) => {
        setLoading(false);
        toast.success("Created Success");
        router.push(`/movie/$${results.data.data.id}`);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Created Failed");
      });
    // console.log(body);
  };

  useEffect(() => {
    if (
      inputCategory &&
      image &&
      inputMinute &&
      inputHour &&
      body &&
      showTimes.length > 0
    )
      setSave(true);
  }, [inputCategory, image, inputMinute, inputHour, body, showTimes]);

  useEffect(() => {
    let display = [];
    let getId = [];
    action && display.push("Action,") && getId.push("1");
    adventure && display.push("Adventure,") && getId.push("2");
    sci && display.push("Sci-Fi,") && getId.push("3");
    fantasy && display.push("Fantasy,") && getId.push("4");
    comedy && display.push("Comedy,") && getId.push("5");
    drama && display.push("Drama,") && getId.push("6");
    horror && display.push("Horror,") && getId.push("7");
    romance && display.push("Romance,") && getId.push("8");
    thriller && display.push("Thriller,") && getId.push("9");
    mystery && display.push("Mystery,") && getId.push("10");
    kids && display.push("Kids,") && getId.push("11");
    setDisplay(display);
    setInputCategory(getId);
  }, [
    action,
    adventure,
    sci,
    fantasy,
    comedy,
    drama,
    horror,
    romance,
    thriller,
    mystery,
    kids,
  ]);

  const ImageHandler = (e) => {
    if (e.target.files && e.target.files[0]) {
      const addImage = e.target.files[0];
      setImage(addImage);
    }
  };

  const showHandler = () => {
    setCategory(!modalCategory);
  };

  useEffect(() => {
    setAllowed(false);
    if (selectStudios && selectTime) setAllowed(true);
  }, [selectStudios, selectTime]);

  useEffect(() => {
    setTime(false);
    if (
      selectTime1 ||
      selectTime2 ||
      selectTime3 ||
      selectTime4 ||
      selectTime5 ||
      selectTime6
    )
      setTime(true);
  }, [
    selectTime1,
    selectTime2,
    selectTime3,
    selectTime4,
    selectTime5,
    selectTime6,
  ]);

  useEffect(() => {
    setStudios(false);
    if (
      selectEbu ||
      selectHiflix ||
      selectCineOne ||
      selectCgv ||
      selectXXI ||
      selectPlatinum
    )
      setStudios(true);
  }, [
    selectEbu,
    selectHiflix,
    selectCineOne,
    selectCgv,
    selectXXI,
    selectPlatinum,
  ]);

  const changeHandler = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  const cancelHandler = (data, index) => {
    let newData = showTimes;
    let newValue = [];
    newData.filter((item) => {
      if (item.studio !== data.studio) newValue.push(item);
    });
    setShow(newValue);
  };

  const addHandler = () => {
    let timesArr = [];
    let studio = "";
    if (selectTime1) timesArr.push("1");
    if (selectTime2) timesArr.push("2");
    if (selectTime3) timesArr.push("3");
    if (selectTime4) timesArr.push("4");
    if (selectTime5) timesArr.push("5");
    if (selectTime6) timesArr.push("6");
    if (selectEbu) studio = "1";
    if (selectHiflix) studio = "2";
    if (selectCineOne) studio = "3";
    if (selectCgv) studio = "4";
    if (selectXXI) studio = "5";
    if (selectPlatinum) studio = "6";
    let addShow = [
      ...showTimes,
      {
        studio: studio,
        times: timesArr,
      },
    ];
    setDefault();
    setShow(addShow);
  };

  const setDefault = () => {
    setEbu(false);
    setCineOne(false);
    setXXI(false);
    setCgv(false);
    setPlatinum(false);
    setHiflix(false);
    setTime1(false);
    setTime2(false);
    setTime3(false);
    setTime4(false);
    setTime5(false);
    setTime6(false);
  };

  const time1Handler = () => {
    setTime1(!selectTime1);
  };
  const time2Handler = () => {
    setTime2(!selectTime2);
  };
  const time3Handler = () => {
    setTime3(!selectTime3);
  };
  const time4Handler = () => {
    setTime4(!selectTime4);
  };
  const time5Handler = () => {
    setTime5(!selectTime5);
  };
  const time6Handler = () => {
    setTime6(!selectTime6);
  };

  const ebuHandler = () => {
    setEbu(!selectEbu);
    setHiflix(false);
    setCineOne(false);
    setXXI(false);
    setCgv(false);
    setPlatinum(false);
  };
  const hiflixHandler = () => {
    setHiflix(!selectHiflix);
    setEbu(false);
    setCineOne(false);
    setXXI(false);
    setCgv(false);
    setPlatinum(false);
  };
  const cineHandler = () => {
    setCineOne(!selectCineOne);
    setEbu(false);
    setHiflix(false);
    setXXI(false);
    setCgv(false);
    setPlatinum(false);
  };
  const xxiHandler = () => {
    setXXI(!selectXXI);
    setEbu(false);
    setHiflix(false);
    setCineOne(false);
    setCgv(false);
    setPlatinum(false);
  };
  const cgvHandler = () => {
    setCgv(!selectCgv);
    setEbu(false);
    setHiflix(false);
    setCineOne(false);
    setXXI(false);
    setPlatinum(false);
  };
  const platinumHandler = () => {
    setPlatinum(!selectPlatinum);
    setEbu(false);
    setHiflix(false);
    setCineOne(false);
    setXXI(false);
    setCgv(false);
  };

  const inputHourHandler = (event) => {
    if (!/[0-9]/.test(event.target.value)) {
      event.preventDefault();
    }
    setHour(event.target.value);
  };
  const inputMinuteHandler = (event) => {
    if (!/[0-9]/.test(event.target.value)) {
      event.preventDefault();
    }
    setMinute(event.target.value);
  };

  return (
    <>
      <Navbar />
      <main className={` container-fluid ${styles["cont-fluid"]}`}>
        <div className={`container ${styles["cont-up"]} `}>
          <div
            className={` ${styles["cont-up"]} container d-flex p-0 justify-content-between `}
          >
            {isLoading && (
              <div className={styles["container-loading"]}>
                <Loading />
              </div>
            )}
            <div className={`container  ${styles["cont1-left"]}`}>
              <p className={`${styles["movie-description"]}`}>
                Movie Description
              </p>
              <div
                className={`container card col-md-12 col-lg-12  p-0 m-0 ${styles["card1-left"]}`}
              >
                <div className={` px-5 px-md-2 ${styles.patdualiama}`}>
                  <div
                    className={`container d-flex justify-content-between p-5 ${styles.spaces} `}
                  >
                    <div
                      className={`d-flex col-lg-5 col-md-6 ${styles["cont-image"]}`}
                    >
                      <label
                        className={` card ${styles["card-spider"]}`}
                        htmlFor="images"
                      >
                        {image ? (
                          <Image
                            loader={myLoader}
                            className={` p-4 ${styles["img-spider"]} `}
                            src={URL.createObjectURL(image)}
                            alt="/"
                            width={215}
                            height={295}
                          />
                        ) : (
                          <Image
                            className={` p-4 ${styles["img-spider"]} `}
                            src={defaultImage}
                            alt="/"
                            width={215}
                            height={295}
                          />
                        )}
                        <input
                          type="file"
                          id={"images"}
                          className="d-none"
                          onChange={ImageHandler}
                          width={215}
                          height={295}
                        />
                      </label>
                      {/* <div className={` card ${styles["card-spider"]}`}>
                        <Image
                          className={` p-4 ${styles["img-spider"]} `}
                          src={defaultImage}
                          alt="/"
                        />
                      </div> */}
                      <form className={styles.dir}>
                        <p className={`${styles["name-director"]}`}>Director</p>
                        <div className={`card ${styles["director-card"]}`}>
                          <input
                            name="director"
                            onChange={changeHandler}
                            placeholder="Input Director"
                            className={`px-3 ${styles.inputs}`}
                          />
                        </div>
                      </form>
                    </div>
                    <div
                      className={`col-lg-7 col-md-6 ${styles["cont-desc-movie"]}`}
                    >
                      <div className="mb-3">
                        <p className={`${styles["title-desc"]}`}>Movie Name</p>
                        <form className={`card ${styles["desc-card"]}`}>
                          <input
                            name="title"
                            placeholder="Input Title Movie"
                            onChange={changeHandler}
                            className={`ps-4 ps-md-2 mb-0 ${styles.inputs} ${styles["font-md"]} `}
                          />
                        </form>
                      </div>
                      <div className="mb-3">
                        <p className={`${styles["title-desc"]}`}>Category</p>
                        <div
                          className={`${styles["select-card"]}`}
                          onClick={showHandler}
                        >
                          <p>
                            {displayCategory
                              ? displayCategory
                              : "Select Category"}
                          </p>
                          <p>v</p>
                        </div>
                      </div>
                      {modalCategory && (
                        <div className={styles.listCtg}>
                          <p
                            className={action ? styles.selectCtg : undefined}
                            onClick={() => {
                              setAction(!action);
                            }}
                          >
                            1. Action
                          </p>
                          <p
                            className={adventure ? styles.selectCtg : undefined}
                            onClick={() => {
                              setAdventure(!adventure);
                            }}
                          >
                            2. Adventure
                          </p>
                          <p
                            className={sci ? styles.selectCtg : undefined}
                            onClick={() => {
                              setSci(!sci);
                            }}
                          >
                            3. Sci-Fi
                          </p>
                          <p
                            className={fantasy ? styles.selectCtg : undefined}
                            onClick={() => {
                              setFantasy(!fantasy);
                            }}
                          >
                            4. Fantasy
                          </p>
                          <p
                            className={comedy ? styles.selectCtg : undefined}
                            onClick={() => {
                              setComedy(!comedy);
                            }}
                          >
                            5. Comedy
                          </p>
                          <p
                            className={drama ? styles.selectCtg : undefined}
                            onClick={() => {
                              setDrama(!drama);
                            }}
                          >
                            6. Drama
                          </p>
                          <p
                            className={horror ? styles.selectCtg : undefined}
                            onClick={() => {
                              setHorror(!horror);
                            }}
                          >
                            7. Horror
                          </p>
                          <p
                            className={romance ? styles.selectCtg : undefined}
                            onClick={() => {
                              setRomance(!romance);
                            }}
                          >
                            8. Romance
                          </p>
                          <p
                            className={thriller ? styles.selectCtg : undefined}
                            onClick={() => {
                              setThriller(!thriller);
                            }}
                          >
                            9. Thriller
                          </p>
                          <p
                            className={mystery ? styles.selectCtg : undefined}
                            onClick={() => {
                              setMystery(!mystery);
                            }}
                          >
                            10. Mystery
                          </p>
                          <p
                            className={kids ? styles.selectCtg : undefined}
                            onClick={() => {
                              setKids(!kids);
                            }}
                          >
                            11. Kids
                          </p>
                        </div>
                      )}
                      <div className={`mb-4 ${styles["realise-cont"]}`}>
                        <div className="col-5">
                          <p
                            className={`${styles["title-desc"]} ${styles["title-desc-md"]}`}
                          >
                            Release date
                          </p>
                          {/* <input type={"date"} /> */}
                          <form className={`card ${styles["desc-card"]}`}>
                            <input
                              type={"date"}
                              name="date"
                              onChange={changeHandler}
                              className={`ps-4 ps-md-2 mb-0 ${styles.inputs} ${styles["font-md"]} `}
                            />
                            {/* <p className={styles.symbol}>&#x21B4;</p> */}
                          </form>
                        </div>
                        <form className={`${styles.formduration}`}>
                          <p
                            className={`${styles["title-desc"]} ${styles["title-desc-md"]} ${styles.duration}`}
                          >
                            {" "}
                            Duration (hour / minute)
                          </p>
                          <div
                            className={` d-flex justify-content-around ${styles.tigatujuhlima}`}
                          >
                            <div
                              className={`card col-5 col-md-3 ${styles["desc-card"]} ${styles["position"]} ${styles["cols"]}`}
                            >
                              <input
                                placeholder="H"
                                className={` mb-0 d-flex justify-content-center ${styles.inputs}`}
                                maxLength="2"
                                onChange={inputHourHandler}
                              />
                            </div>
                            <div
                              className={`card col-5 col-md-3  ${styles["desc-card"]} ${styles["position-2"]} ${styles["cols"]}`}
                            >
                              <input
                                className={` mb-0 d-flex justify-content-center ${styles.inputs}`}
                                maxLength="2"
                                placeholder="M"
                                onChange={inputMinuteHandler}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className={`${styles.divcast}`}>
                        <p
                          className={`${styles["title-desc"]} ${styles["margins"]}`}
                        >
                          Casts{" "}
                        </p>
                        <form className={`card ${styles["desc-card"]}`}>
                          <input
                            placeholder="Input Cast"
                            name="cast"
                            onChange={changeHandler}
                            className={` px-2 mb-0 ${styles.tom} ${styles.inputs}`}
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="container px-0 mb-5">
                    <div
                      className={`${styles["synopsis"]} container col-12 pb-0`}
                    >
                      <p className={`${styles["synopsis-director"]}`}>
                        Synopsis
                      </p>
                      <form
                        className={`card p-4 col-12 ${styles["Synopsis-card"]}`}
                      >
                        {/* <input type={"text"} className={styles.textarea} /> */}
                        <textarea
                          name="synopsis"
                          onChange={changeHandler}
                          className={` mb-0 ${styles.textsynopsis} ${styles.inputs} ${styles.textarea}`}
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {AllowedSave && (
                <div
                  className={styles.btnSave}
                  onClick={() => {
                    !isLoading && saveHandler();
                  }}
                >
                  <p>SAVE MOVIE</p>
                </div>
              )}
            </div>
            <div
              className={` d-flex col-md-12 col-lg-4  ${styles["card2-left"]} `}
            >
              <div className={`col-md-6 col-lg-12 ${styles.tujuhenamlapan}`}>
                <p className={`${styles["movie-description"]}`}>
                  Premiere Location{" "}
                </p>
                <div
                  className={` ${styles["cont-purwokerto"]} container card col-12 p-0 m-0 `}
                >
                  <Form.Select
                    disabled
                    className={`${styles["form"]}`}
                    aria-label="Default select example"
                  >
                    <option className={`${styles["purwokerto"]}`}>
                      Jakarta
                    </option>
                    <option value="1">Jakarta</option>
                    <option value="2">Bali</option>
                    <option value="3">Semarang</option>
                  </Form.Select>
                  <div
                    className={`d-flex justify-content-around align-items-center ${styles["margin"]}`}
                  >
                    <Image
                      className={`${styles["ebu"]} ${styles["cursor"]} ${
                        selectEbu ? styles.filter : undefined
                      }`}
                      src={ebu}
                      alt="/"
                      onClick={ebuHandler}
                    />
                    <Image
                      className={`${styles["hiflix"]} ${styles["cursor"]} ${
                        selectHiflix ? styles.filter : undefined
                      }`}
                      src={hiflix}
                      alt="/"
                      onClick={hiflixHandler}
                    />
                    <Image
                      className={`${styles["cineone"]} ${styles["cursor"]} ${
                        selectCineOne ? styles.filter : undefined
                      }`}
                      src={cineone}
                      alt="/"
                      onClick={cineHandler}
                    />
                  </div>
                  <div
                    className={`d-flex justify-content-around align-items-center ${styles["margin-3"]}`}
                  >
                    <Image
                      className={`${styles["ebu"]} ${styles["cursor"]} ${
                        selectXXI ? styles.filter : undefined
                      }`}
                      src={xxi}
                      alt="/"
                      onClick={xxiHandler}
                    />
                    <Image
                      className={`${styles["hiflix"]} ${styles["cursor"]} ${
                        selectCgv ? styles.filter : undefined
                      }`}
                      src={cgv}
                      alt="/"
                      onClick={cgvHandler}
                    />
                    <Image
                      className={`${styles["cineone"]} ${styles["cursor"]} ${
                        selectPlatinum ? styles.filter : undefined
                      }`}
                      src={platinum}
                      alt="/"
                      onClick={platinumHandler}
                    />
                  </div>
                </div>
              </div>
              <div className={`col-md-5  col-lg-12 ${styles.tujuhenamlapan}`}>
                <p className={`${styles["movie-description"]}`}> Showtimes </p>
                <div
                  className={`${styles["date"]} container card col-12 p-0 m-0 `}
                >
                  {/* <Form.Select className={`${styles["form"]} ${styles["form-up"]}`} aria-label="Default select example">
                    <option className={`${styles["purwokerto"]}`}>Set a date</option>
                  </Form.Select> */}
                  <div className={` d-flex pb-4 px-2 ${styles.padtuj} `}>
                    <div
                      className={` container pt-2 d-flex ${styles.inputdates}`}
                    >
                      <label className={` py-1 ${styles.set}`}>
                        {" "}
                        Start Date :{" "}
                      </label>
                      <input
                        className={`${styles.dates} ${styles["cursor"]}`}
                        type="date"
                        name="start_show"
                        onChange={changeHandler}
                      />
                    </div>
                    <div
                      className={` container pt-2 d-flex  ${styles.inputdates}`}
                    >
                      <label className={` py-1 ${styles.set}`}>
                        {" "}
                        End Date :{" "}
                      </label>
                      <input
                        className={`${styles.dates} ${styles["cursor"]}`}
                        type="date"
                        name="end_show"
                        onChange={changeHandler}
                      />
                    </div>
                  </div>
                  <p className={`${styles["title-desc"]} ${styles.mid}`}>
                    Select Time :
                  </p>
                  {/* <Form.Select className={`${styles["form"]} ${styles["form-down"]}`} aria-label="Default select example">
                    <option className={`${styles["purwokerto"]}`}>Set a date</option>
                  </Form.Select> */}
                  <div
                    className={`${styles.jam} d-flex justify-content-around gap-1 mb-4 px-1 `}
                  >
                    <p
                      className={`${styles.time} ${styles["cursor"]} ${
                        selectTime1 ? styles.selected : undefined
                      }`}
                      onClick={time1Handler}
                    >
                      {" "}
                      08:30 WIB{" "}
                    </p>
                    <p
                      className={`${styles.time} ${styles["cursor"]} ${
                        selectTime2 ? styles.selected : undefined
                      }`}
                      onClick={time2Handler}
                    >
                      {" "}
                      10:30 WIB{" "}
                    </p>
                    <p
                      className={`${styles.time} ${styles["cursor"]} ${
                        selectTime3 ? styles.selected : undefined
                      }`}
                      onClick={time3Handler}
                    >
                      12:00 WIB
                    </p>
                  </div>
                  <div
                    className={`${styles.jam2} ${styles["cursor"]} d-flex justify-content-around gap-1 mb-2 px-1 `}
                  >
                    <p
                      className={`${styles.time} ${styles["cursor"]} ${
                        selectTime4 ? styles.selected : undefined
                      }`}
                      onClick={time4Handler}
                    >
                      {" "}
                      16:30 WIB{" "}
                    </p>
                    <p
                      className={`${styles.time} ${styles["cursor"]} ${
                        selectTime5 ? styles.selected : undefined
                      }`}
                      onClick={time5Handler}
                    >
                      {" "}
                      19:00 WIB{" "}
                    </p>
                    <p
                      className={`${styles.time} ${styles["cursor"]} ${
                        selectTime6 ? styles.selected : undefined
                      }`}
                      onClick={time6Handler}
                    >
                      {" "}
                      20:30 WIB{" "}
                    </p>
                  </div>
                  {isAllowed && (
                    <div className={styles.btn} onClick={addHandler}>
                      <p>ADD</p>
                    </div>
                  )}
                </div>
                <div className={styles.contChart}>
                  {showTimes &&
                    showTimes.map((data, index) => {
                      let forSrc = ebu;
                      if (data.studio === "2") forSrc = hiflix;
                      if (data.studio === "3") forSrc = cineone;
                      if (data.studio === "4") forSrc = cgv;
                      if (data.studio === "5") forSrc = xxi;
                      if (data.studio === "6") forSrc = platinum;
                      return (
                        <>
                          <div className={styles.conImg}>
                            <div
                              className={styles.delete}
                              onClick={() => {
                                cancelHandler(data, index);
                              }}
                            >
                              <p>&#x2573;</p>
                            </div>
                            <Image
                              key={index}
                              className={styles["chart-img"]}
                              src={forSrc}
                              alt="/"
                            />
                          </div>
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`container ${styles["cont-down"]} `}>
          <div className={`d-flex justify-content-between px-2`}>
            <p className={`${styles["movie-description"]} ${styles.sales}`}>
              Sales Charts{" "}
            </p>
            <div className={`${styles["time"]}`}>
              <p>08:30am</p>
              <p>10:30pm</p>
              <p>12:00pm</p>
            </div>
          </div>

          <div className=" card col-12">
            <ul className={` nav gap-5 pt-5 ps-3 ${styles.navschart}`}>
              <li className="nav-item">
                <p className="my-0">Based on Movie</p>
              </li>
              <li className="nav-item">
                <p className="my-0">Based on Location</p>
              </li>
            </ul>
            <hr className="container mt-3 mb-5" />
            <div className="container d-flex">
              <Image
                className={`col-4 ${styles.imgcharts}`}
                src={chart}
                alt="/"
              />
              <Image
                className={`col-4 ${styles.imgcharts}`}
                src={chart}
                alt="/"
              />
              <Image
                className={`col-4 ${styles.imgcharts}`}
                src={chart}
                alt="/"
              />
            </div>
            <div className="container d-flex">
              <Image
                className={`col-4 ${styles.imgcharts}`}
                src={chart}
                alt="/"
              />
              <Image
                className={`col-4 ${styles.imgcharts}`}
                src={chart}
                alt="/"
              />
              <Image
                className={`col-4 ${styles.imgcharts}`}
                src={chart}
                alt="/"
              />
            </div>

            <div className="d-flex justify-content-center gap-3 my-5">
              <div className={`card ${styles["pagination-1"]}`}>1</div>
              <div className={`card ${styles["pagination"]}`}>2</div>
              <div className={`card ${styles["pagination"]}`}>3</div>
              <div className={`card ${styles["pagination"]}`}>4</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Index;
