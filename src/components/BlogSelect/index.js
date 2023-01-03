import React from "react"
const Index = ({tagData}) => {
  return (
    <div className="blog-select-position">
      <form id="contact-form" method="post" action="contact.php">
        <label className="blogs-select-heading">
          Browse our extensive library of Blog.
        </label>
        <br />
        <select
          onChange={(e) => setTagId(e?.target?.value)}
          placeholder="Tags"
          className="blogSelect"
        >
          <option value="">Filter by resource topics</option>
          {tagData?.data?.map((currElem, key) => {
            return (
              <option key={key} value={`${currElem?.attributes?.tag_id}`}>
                {currElem?.attributes?.name}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};

export default Index;