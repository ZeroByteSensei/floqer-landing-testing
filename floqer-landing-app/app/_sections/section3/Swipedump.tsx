"use client";

import React, { useCallback } from "react";
import { sleep } from "@/app/_utils/constants";
import "./Swiper.css";
import Image from "next/image";
import { Button } from "@nextui-org/button";

const SwipeDump = () => {
  const ref1 = React.useRef<HTMLDivElement>(null);
  const ref2 = React.useRef<HTMLDivElement>(null);
  const ref3 = React.useRef<HTMLDivElement>(null);
  const ref4 = React.useRef<HTMLDivElement>(null);
  let currRef = React.useRef<HTMLDivElement>(null);

  currRef = ref2;

  const prevComp = {
    ref1: ref4,
    ref2: ref1,
    ref3: ref2,
    ref4: ref3,
  };

  const nextComp = {
    ref1: ref2,
    ref2: ref3,
    ref3: ref4,
    ref4: ref1,
  };

  const mapToString = {
    ref1: ref1,
    ref2: ref2,
    ref3: ref3,
    ref4: ref4,
  };

  const getKey = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    // console.log("ref for getkey--> ", ref);
    if (!ref.current) return "";
    let res = "";
    Object.entries(mapToString).forEach(([key, value]) => {
      if (value.current === ref.current) {
        // console.log("found key --> ", key)
        res = key;
      }
    });
    return res;
  };

  const getPrevPrev = (
    ref: React.MutableRefObject<HTMLDivElement | null>
  ): React.RefObject<HTMLDivElement> => {
    const currKey = getKey(ref);
    // console.log("currKey --> ", currKey);
    //@ts-ignore
    const prevKey = getKey(prevComp[currKey]);
    //@ts-ignore
    return prevComp[prevKey];
  };

  const getPrev = (
    ref: React.MutableRefObject<HTMLDivElement | null>
  ): React.RefObject<HTMLDivElement> => {
    const currKey = getKey(ref);
    //@ts-ignore
    return prevComp[currKey];
  };

  const getNext = (
    ref: React.MutableRefObject<HTMLDivElement | null>
  ): React.RefObject<HTMLDivElement> => {
    const currKey = getKey(ref);
    //@ts-ignore
    return nextComp[currKey];
  };

  const getNextNext = (
    ref: React.MutableRefObject<HTMLDivElement | null>
  ): React.RefObject<HTMLDivElement> => {
    const currKey = getKey(ref);
    //@ts-ignore
    const nextKey = getKey(nextComp[currKey]);
    //@ts-ignore
    return nextComp[nextKey];
  };

  const applyAnimation = async (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;

    await sleep(800);
  };

  const handlePrev = useCallback(async () => {
    if (!currRef.current) return;
    const prevPrev = getPrevPrev(currRef);
    const prev = getPrev(currRef);
    const next = getNext(currRef);
    if (!prev.current) return;
    prev.current.style.animation =
      "800ms cubic-bezier(0.6, 0.6, 0, 1) 0s 1 normal forwards running wall-comment-prev";
    prev.current.style.opacity = "1";
    await sleep(600);
    prevPrev.current?.classList.remove("wall-comment-hidden");
    prevPrev.current?.classList.remove("wall-comment-next");
    prevPrev.current?.classList.add("wall-comment-prev");
    prev.current?.classList.remove("wall-comment-prev");
    prev.current?.classList.add("wall-comment-active");
    currRef.current?.classList.remove("wall-comment-active");
    currRef.current?.classList.add("wall-comment-next");
    next.current?.classList.add("wall-comment-hidden");
    await sleep(200);
    prev.current.style.animation = "";
    prev.current.style.opacity = "";
    currRef = prev;
  }, [currRef.current]);

  const handleNext = useCallback(async () => {
    if (!currRef) return;
    const prev = getPrev(currRef);
    const next = getNext(currRef);
    const nextNext = getNextNext(currRef);
    if (!next.current) return;
    next.current.style.animation =
      "800ms cubic-bezier(0.6, 0.6, 0, 1) 0s 1 normal forwards running wall-comment-next";
    next.current.style.opacity = "1";
    await sleep(600);
    prev.current?.classList.add("wall-comment-hidden");
    prev.current?.classList.remove("wall-comment-prev");
    prev.current?.classList.add("wall-comment-next");
    currRef.current?.classList.remove("wall-comment-active");
    currRef.current?.classList.add("wall-comment-prev");
    next.current?.classList.remove("wall-comment-next");
    next.current?.classList.add("wall-comment-active");
    nextNext.current?.classList.remove("wall-comment-hidden");
    nextNext.current?.classList.add("wall-comment-next");
    await sleep(200);
    next.current.style.animation = "";
    next.current.style.opacity = "";
    currRef = next;
  }, [currRef.current]);

  return (
    <div className="wall-comments !font-primary">
      <div>
        <Button
          isIconOnly
          aria-label="Previous testimonial"
          className="wall-comments-controls"
          onClick={(e) => {
            handlePrev();
          }}
        >
          <svg
            fill="none"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M11.7623 6.22456C11.5182 5.98048 11.1224 5.98048 10.8784 6.22456L8.13429 8.96864C7.56478 9.53815 7.56478 10.4615 8.13429 11.031L10.8784 13.7751C11.1224 14.0192 11.5182 14.0192 11.7623 13.7751C12.0063 13.531 12.0063 13.1353 11.7623 12.8912L9.01818 10.1472C8.93682 10.0658 8.93682 9.93388 9.01818 9.85252L11.7623 7.10845C12.0063 6.86437 12.0063 6.46864 11.7623 6.22456Z"
              fill="#11244A"
              fill-rule="evenodd"
            ></path>
          </svg>
        </Button>
        <Button
          isIconOnly
          aria-label="Next testimonial"
          className="wall-comments-controls"
          onClick={(e) => {
            handleNext();
          }}
        >
          <svg
            fill="none"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M7.89009 6.22456C8.13417 5.98048 8.5299 5.98048 8.77397 6.22456L11.5181 8.96864C12.0876 9.53815 12.0876 10.4615 11.5181 11.031L8.77397 13.7751C8.5299 14.0192 8.13417 14.0192 7.89009 13.7751C7.64601 13.531 7.64601 13.1353 7.89009 12.8912L10.6342 10.1472C10.7155 10.0658 10.7155 9.93388 10.6342 9.85252L7.89009 7.10845C7.64601 6.86437 7.64601 6.46864 7.89009 6.22456Z"
              fill="#11244A"
              fill-rule="evenodd"
            ></path>
          </svg>
        </Button>
      </div>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div
            ref={ref1}
            className="wall-comment wall-comment-prev swiper-slide"
          >
            <div className="wall-comment-inner">
              <div className="wall-comment-content text-base">
                “I used to dedicate weeks to find orgs that are a fit and
                populate a sheet with leads from those orgs, do research on each
                org and create and send personalised emails. With Floqer, I was
                able to generate emails for an ICP in a matter of minutes using
                my tone and voice... ”
              </div>
              <div className="wall-comment-user">
                <Image
                  alt=""
                  decoding="async"
                  height="1"
                  loading="lazy"
                  src="/build/q-4fc1b8c1.png"
                  width="1"
                  className="lazy-image lazy-image-hidden"
                />

                <div>
                  <div className="wall-comment-user-name">Uday Parmar</div>
                  <div className="wall-comment-user-title">Sales Leader</div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={ref2}
            className="wall-comment wall-comment-active swiper-slide"
          >
            <div className="wall-comment-inner">
              <div className="wall-comment-content">
                {`“Referred you to a few friends that will be trying it out :) We just finished the campaign with the initial 1,600 leads and the results were very conclusive! Response rate was 2X normal.”`}
              </div>
              <div className="wall-comment-user">
                <Image
                  alt="Amber Stone avatar"
                  decoding="async"
                  height="1"
                  loading="lazy"
                  src="/build/q-c2091d28.png"
                  width="1"
                  className="lazy-image lazy-image-hidden"
                />

                <div>
                  <div className="wall-comment-user-name">Pulkit Jaiswal</div>
                  <div className="wall-comment-user-title">Sales Leader</div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={ref3}
            className="wall-comment wall-comment-next swiper-slide"
          >
            <div className="wall-comment-inner">
              <div className="wall-comment-content">
                {`“My favourite part about how advanced automated email and messaging is becoming is the fact that we're not only automating the writing part, but the reading too!”`}
              </div>
              <div className="wall-comment-user">
                <Image
                  alt="Drew White avatar"
                  decoding="async"
                  height="1"
                  loading="lazy"
                  src="/build/q-cda24473.png"
                  width="1"
                  className="lazy-image lazy-image-hidden"
                />

                <div>
                  <div className="wall-comment-user-name">Vishal Makwana</div>
                  <div className="wall-comment-user-title">
                    Director, Business Development
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={ref4}
            className="wall-comment wall-comment-next swiper-slide wall-comment-hidden"
          >
            <div className="wall-comment-inner">
              <div className="wall-comment-content">
                {`“I was sceptical at first about how an AI tool could understand the nuances or the different tasks involved in our sales cycle. But I've been pleasantly surprised! The automations are rather easy to learn, and use, allowing me to actually focus on what matters, SELLING!”`}
              </div>
              <div className="wall-comment-user">
                <Image
                  alt="Brendan McDonald avatar"
                  decoding="async"
                  height="1"
                  loading="lazy"
                  src="/build/q-4fc1b8c1.png"
                  width="1"
                  className="lazy-image lazy-image-hidden"
                />

                <div>
                  <div className="wall-comment-user-name">Arjun R. Krishna</div>
                  <div className="wall-comment-user-title">
                    Co-founder at WeMakeScholars
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="wall-comment wall-comment-next swiper-slide wall-comment-hidden">
            <div className="wall-comment-inner">
              <div className="wall-comment-content">
                “Wiza helped our team scale 1:1 outreach for our ABM programs by
                providing an easy way to enrich contact data at target accounts
                in a few clicks.”
              </div>
              <div className="wall-comment-user">
                <img
                  alt="Amber Stone avatar"
                  decoding="async"
                  height="1"
                  loading="lazy"
                  src="/build/q-c2091d28.png"
                  width="1"
                  className="lazy-image lazy-image-hidden"
                />

                <div>
                  <div className="wall-comment-user-name">Amber Stone</div>
                  <div className="wall-comment-user-title">
                    Head of Enterprise ABM, UserTesting
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="wall-comment wall-comment-next swiper-slide wall-comment-hidden">
            <div className="wall-comment-inner">
              <div className="wall-comment-content">
                “Wiza changed the prospecting game for my company. At this point
                Wiza has paid for itself 100x over, and there’s really nothing
                more that I could ask for.”
              </div>
              <div className="wall-comment-user">
                <img
                  alt="Drew White avatar"
                  decoding="async"
                  height="1"
                  loading="lazy"
                  src="/build/q-cda24473.png"
                  width="1"
                  className="lazy-image lazy-image-hidden"
                />

                <div>
                  <div className="wall-comment-user-name">Drew White</div>
                  <div className="wall-comment-user-title">
                    Digital Sourcing Specialist, Aerotek
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SwipeDump;
