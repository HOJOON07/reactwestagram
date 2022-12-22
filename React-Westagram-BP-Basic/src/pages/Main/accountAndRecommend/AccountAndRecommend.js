import React from "react";
import "./accountAndRecommend.scss";

const AccountAndRecommend = () => {
  return (
    <div className="accountAndRecommendContainer">
      <div className="accountWrapper">
        <img
          className="userProfileImage"
          alt="profile"
          src="/images/profile.png"
        />
        <div className="infoWrapper">
          <p className="userAccount">account</p>
          <p className="userName">이름</p>
        </div>
      </div>
      <div className="recommendAccountWrapper">
        <p className="recommendTitle">회원님을 위한 추천</p>
        {RECOMMEND.map(recommendList => {
          return (
            <div className="accountWrapper" key={recommendList.id}>
              <img
                className="userProfileImage"
                alt="profile"
                src="/images/profile.png"
              />
              <div className="infoWrapper">
                <div className="userAccount">{recommendList.account}</div>
                <div className="whosConnected">{`${recommendList.whosFollow}님 외 00이 팔로우 합니다`}</div>
              </div>
              <button className="followToggle">팔로우</button>
            </div>
          );
        })}
      </div>
      <div className="siteMapWrapper">
        <ul className="siteMapList">
          {SITE_INFO.map(infoList => {
            return (
              <li key={infoList.id}>
                <a className={infoList.className} href={infoList.href}>
                  {infoList.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AccountAndRecommend;
const RECOMMEND = [
  { id: 1, account: "account", whosFollow: "whos" },
  { id: 2, account: "account", whosFollow: "whos" },
  { id: 3, account: "account", whosFollow: "whos" },
  { id: 4, account: "account", whosFollow: "whos" },
  { id: 5, account: "account", whosFollow: "whos" },
];

const SITE_INFO = [
  {
    id: 1,
    href: "localhost:3000/mai",
    title: "소개",
    className: "siteInfoLink",
  },
  {
    id: 2,
    href: "localhost:3000/mai",
    title: "도움말",
    className: "siteInfoLink",
  },
  {
    id: 3,
    href: "localhost:3000/mai",
    title: "홍보센터",
    className: "siteInfoLink",
  },
  {
    id: 4,
    href: "localhost:3000/mai",
    title: "API",
    className: "siteInfoLink",
  },
  {
    id: 5,
    href: "localhost:3000/mai",
    title: "채용",
    className: "siteInfoLink",
  },
  {
    id: 6,
    href: "localhost:3000/mai",
    title: "정보",
    className: "siteInfoLink",
  },
  {
    id: 7,
    href: "localhost:3000/mai",
    title: "개인정보처리방침",
    className: "siteInfoLink",
  },
  {
    id: 8,
    href: "localhost:3000/mai",
    title: "약관",
    className: "siteInfoLink",
  },
  {
    id: 9,
    href: "localhost:3000/mai",
    title: "위치",
    className: "siteInfoLink",
  },
  {
    id: 10,
    href: "localhost:3000/mai",
    title: "언어",
    className: "siteInfoLink lastElement",
  },
];
