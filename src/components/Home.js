import React, { useEffect, useState } from "react";
import { useMany } from "@refinedev/core";

import Filter from "../utils/Filter";
import Search from "../utils/Search";
import Card from "../utils/Card";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [posts, setPostList] = useState([]);
  /*const posts = useMany({
    resource: "posts",
    ids: Array.from(Array(8).keys()).slice(1)
  }).data?.data*/

  const navigate = useNavigate();

  useEffect(() => {
   
    const dataFetch = async () => {
       await fetch("http://localhost:4000/api/all/threads")
        .then((res) => res.json())
        .then((data) => setPostList(data.threads))
    };

    dataFetch();
  }, [navigate]);

  const filters = ["game", "movie", "music"];
  const filterThreads = (filter) => {
    console.log(posts.filter((el) => el.tag.includes(filter)));
    return posts.filter((el) => el.tag.includes(filter));
  }
  return (
    <motion.div>
      <div className={"filters"}>
        {filters.map((filter, index) => {
          return (
            <Filter
              key={index}
              title={filter}
              isActive={filter === activeFilter}
              onClick={(e) => {
                const el = e.target;
                el.textContent?.toLowerCase() !== activeFilter
                  ? setActiveFilter(filter)
                  : setActiveFilter("");
              }}
            />
          );
        })}
      </div>
      <Search
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <AnimatePresence>
        <div className="w-100">
          <div className="card-list">
            { activeFilter=== "" ? posts
              .map((post, index) => {
                return (
                  <Card id={post.id} key={index} title={post.title} tag={post.tag} />
                );
              }) : filterThreads(activeFilter).map((post, index) => {
                return (
                  <Card id={post.id} key={index} title={post.title} tag={post.tag} />
                );},)}
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};
export default Home;
