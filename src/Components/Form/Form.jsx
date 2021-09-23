import React from 'react'
import styled from 'styled-components'
const FORMDATA = styled.div`
  text-align: center;

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
    margin: 20px auto;
    border: 2px solid black;
    width: 90%;
    justify-content: space-evenly;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 40% 40%;

    p {
      font-weight: 600;
    }

    .form-left {
      border: 2px solid black;
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
      border: 2px solid black;
      width: 90%;
      margin: 20px auto;

      .form-compliment{
          border: 2px solid black;
          input{
              margin: 5px;
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
          width: 140px;
          margin: 5px 20px;
          height: 30px;
        }
      }
    }
  }
`;
export default function Form() {
    return (
      <div>
        <FORMDATA>
          <p>
            <span style={{ fontWeight: 600 }}>Packages</span> | create package
          </p>

          <div className="form-container">
            <div className="form-left">
              <div className="form-radio">
                <div>
                  <p>Package Type</p>
                  <input type="radio" name="packagetype" />
                  Translation
                  <br />
                  <input type="radio" name="packagetype" />
                  Proofreading
                  <br />
                  <input type="radio" name="packagetype" /> TEP
                  <br />
                  <input type="radio" name="packagetype" />
                  OTHERS
                  <br />
                </div>
                <div>
                  <p>Field of Text</p>
                  <input type="radio" name="radioText" /> Translation
                  <br />
                  <input type="radio" name="radioText" /> Proofreading
                  <br />
                  <input type="radio" name="radioText" /> TEP
                  <br />
                  <input type="radio" name="radioText" /> OTHERS
                  <br />
                </div>
              </div>
              <input type="text" placeholder="Package Type" />
              <input type="text" placeholder="Package Type" />
              <input type="text" placeholder="Package Type" />
            </div>
            <div className="form-right">
              <div className="form-select">
                <div>
                  <select name="" id=""></select>
                  <select name="" id=""></select>
                </div>
                <div>
                  <button>+Add More</button>
                  <select name="" id="" style={{ marginLeft: "50px" }}></select>
                </div>
              </div>
              <div className="form-compliment">
                <p>Is Complementary?</p>
                <input type="radio" name="complementary" /> <input type="radio" name="complementary" />
              </div>
              <input type="text" placeholder="Package Type" />
              <input type="text" placeholder="Package Type" />
            </div>
          </div>
          <button>Calculate</button>
          <button>Reset</button>
          <hr />
        </FORMDATA>
      </div>
    );
}
