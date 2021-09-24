import React from 'react'
import styled from 'styled-components'
import Slideshow from '../Slideshow/Slideshow';
const FORMDATA = styled.div`
  text-align: center;
  padding-top:70px;

  button {
    background-color: #003e7a;
    color: white;
    font-weight: 600;
    cursor: pointer;
    border: none;
    margin-left: 10px;
    border-radius: 4px;
    padding: 8px 8px;
  }

  hr {
    width: 90%;
    margin: 20px auto;
    background-color: black;
  }

  .form-container {
    padding: 30px;
    margin: 20px auto;
    border: 2px solid black;
    width: 85%;
    justify-content: space-evenly;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 40% 40%;

    p {
      font-weight: 700;
    }

    .form-left {
      width: 90%;
      margin: 20px auto;

      .form-radio {
        margin-top: 20px;
        display: grid;
        grid-template-columns: auto auto;

        input {
          height: 10px;
          cursor: pointer;
          width: 10px;
          background-color: white;
          margin-top: 5px;
        }

        span{
          font-size: 14px;
        }

        .form-label-radio {
          text-align: left;
        }
      }

      input {
        width: 95%;
        border: 1px solid grey;
        border-radius: 4px;
        background-color: white;
        margin-top: 30px;
        padding: 8px;
        color: grey;
        font-weight: 600;
      }
    }

    .form-right {
      width: 90%;
      margin: 20px auto;

      .form-compliment {
        display: flex;
        width: 50%;
        margin: 30px auto;
        input {
          margin: 5px;
        }

        > div {
          display: flex;
        }
      }

      input {
        width: 95%;
        border: 1px solid grey;
        border-radius: 4px;
        background-color: white;
        margin-top: 30px;
        padding: 8px;
        color: grey;
        font-weight: 600;
      }

      .form-select {
        width: 80%;
        margin: 20px auto;

        > div {
          margin: 15px auto;
        }

        button {
          width: 140px;
        }
        select {
          width: 145px;
          background-color: white;
          cursor: pointer;
          margin: 5px 20px;
          height: 30px;
        }
      }
    }
  }

  .footer {
    color: grey;
    font-size: 12px;
    font-weight: 600;
  }
`;
export default function Form() {
    return (
      <div>
        <FORMDATA>
          <Slideshow />
          <p>
            <span style={{ fontWeight: 600 }}>Packages</span> | create package
          </p>

          <div className="form-container">
            <div className="form-left">
              <div className="form-radio">
                <div className="form-label-radio">
                  <p>Package Type</p>
                  <input type="radio" name="packagetype" />
                  <span> Translation</span>
                  <br />
                  <input type="radio" name="packagetype" />
                  <span> Proofreading</span>
                  <br />
                  <input type="radio" name="packagetype" /> <span> TEP </span>
                  <br />
                  <input type="radio" name="packagetype" />
                  <span> OTHERS </span>
                </div>
                <div className="form-label-radio">
                  <p>Field of Text</p>
                  <input type="radio" name="radioText" /> Genaral Domain
                  <br />
                  <input type="radio" name="radioText" /> Technician Domain
                  <br />
                  <input type="radio" name="radioText" /> Medical Domain
                  <br />
                  <input type="radio" name="radioText" /> OTHERS
                  <br />
                </div>
              </div>
              <input type="text" placeholder="Package Type" />
              <input type="text" placeholder="Type Duration" />
              <input type="text" placeholder="Discount" />
            </div>
            <div className="form-right">
              <div className="form-select">
                <div>
                  <select name="" id="">
                    <option value="arabic">arabic</option>
                  </select>
                  <select name="" id="">
                    <option value="germany">germany</option>
                  </select>
                </div>
                <div>
                  <button>+Add More</button>
                  <select name="" id="" style={{ marginLeft: "50px" }}>
                    <option value="english">english</option>
                  </select>
                </div>
              </div>
              <div className="form-compliment">
                <p>Is Complementary?</p>
                <div>
                  <input type="radio" name="complementary" /> YES
                </div>
                <div>
                  <input type="radio" name="complementary" /> NO
                </div>
              </div>
              <input type="text" placeholder="Package Type" />
              <input type="text" placeholder="Package Type" />
            </div>
          </div>
          <button>Calculate</button>
          <button>Reset</button>
          <hr />
          <div className="footer">
            <p>TransPack</p>
            <p>Copyright © 2021 All Rights Reserved</p>
          </div>
        </FORMDATA>
      </div>
    );
}
