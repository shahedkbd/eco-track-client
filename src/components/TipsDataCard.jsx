import React from "react";
import { BiUpvote } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const TipsDataCard = ({ tipsData }) => {
    console.log(tipsData);
    const {title, content, category, author, authorName, upvotes, createdAt} = tipsData
    
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between">
            <p>{category}</p>
            <div className="flex items-center gap-1">
                <BiUpvote />
                <p><span>{upvotes}</span></p>
            </div>
        </div>
        <h2 className="card-title font-bold h-15">{title}</h2>
        <p className="h-35">{content}</p>
        <p className="text-xs font-bold text-right">{createdAt}</p>
        <div className="divider"></div>
        <p className="font-bold">{author}</p>
        <p className="flex items-center gap-2 font-bold"><CgProfile /> {authorName}</p>
        
        
      </div>
    </div>
  );
};

export default TipsDataCard;
