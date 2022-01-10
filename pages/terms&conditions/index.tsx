import React from "react";
import Link from 'next/link'
import styled from "styled-components";

const index = () => {
  return (
    <Terms>
      <div className="termsWrapper">
        <h2>Terms &amp; Conditions</h2>
        <p>Please read this agreement carefully before using Invyce.</p>
        <p>
          By using our software (Invyce), or clicking “Agree” you are agreeing
          to all the terms &amp; conditions outlined in this document.
        </p>
        <p>
          This agreement is between Invyce and the customer agreeing to these
          terms.
        </p>
        <ol>
          <li>
            <strong>Software-As-A-Service:</strong> This agreement provides the
            customer access to an internet based software solution as outlined
            at invyce.com.
          </li>
          <li>
            <span>
              <strong>Copyrights:</strong> The software (Invyce), its features,
              workflow, processes, design and technologies provided by Invyce
              are all proprietary property of Invyce. Invyce software and all
              its associated intellectual property rights will remain solely
              with Invyce.
            </span>
          </li>
          <li>
            <strong>Terms of Use:</strong>
            <ol>
              <li>
                &nbsp;In order to use Invyce software and services a customer
                should be at least 18 years old.
              </li>
              <li>
                All data uploaded to Inyce by the customer will remain property
                of the customer.
              </li>
              <li>
                The customer needs to make a successful payment in order to use
                a paid service according to the chosen subscription plan.
              </li>
              <li>
                The free plan can be used by any user with the defined limits
                outlined in the free tier.
              </li>
              <li>
                The customer must keep his/her account password safe and
                confidential.
              </li>
              <li>
                The customer should promptly inform Invyce of any unauthorized
                access.
              </li>
              <li>
                Invyce will provide customer support under the terms of this
                agreement.
              </li>
            </ol>
          </li>
          <li>
            <strong>Termination:</strong>
            <ol>
              <li>
                This agreement will be in effect until the subscription or
                account has been terminated.
              </li>
              <li>
                Non payment of the subscription fee after the notice period will
                be terminated.
              </li>
              <li>
                Invyce has the right to suspend or terminate any account if a
                customer is found in violation of this agreement.
              </li>
            </ol>
          </li>
          <li>
            <strong>Updates:</strong>
            <ol>
              <li>
                Invyce reserves the right to update this agreement anytime in
                the future.
              </li>
              <li>
                Users will be notified of any changes made to this document.
              </li>
            </ol>
          </li>
        </ol>
        <Link passHref href="/auth/signup">
      <button className="button">
          Back
      </button>
          </Link>
      </div>
    </Terms>
  );
};

export default index;

const Terms = styled.section`
  background: #12162e;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 120px 0px 120px 0px;
  .termsWrapper {
    .button{
      background-color: #41cd7d;
      border:none;
      color:white;
      cursor:pointer;
      width:4rem;
      height:4rem;
      border-radius:50%;
    }
    padding: 0px 25px 0px 25px;
  }
  h2 {
    font-size: 32px;
    line-height: 48px;
    font-weight: 600;
    color: #41cd7d;
  }
  p {
    font-size: 15px;
    line-height: 28px;
    font-weight: 400;
    color: white;
  }
  ol {
    li {
      strong {
        font-weight: 600;
        color: #41cd7d;
      }
      font-size: 15px;
      line-height: 28px;
      font-weight: 300;
      color: white;
      ol {
        li {
          font-size: 15px;
          line-height: 28px;
          font-weight: 300;
          color: white;
        }
      }
    }
  }
`;
