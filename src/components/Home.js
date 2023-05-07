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
    // fetch data
    const dataFetch = async () => {
      const posts = await (
        await fetch("https://api.fake-rest.refine.dev/posts")
      ).json();

      // set state when the data received
      setPostList(posts);
    };

    dataFetch();
  }, [navigate]);

  const filters = ["published", "draft", "rejected"];

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
            {posts
              ?.filter((el) =>
                el.title.toLowerCase().includes(inputValue.toLowerCase())
              )
              .filter((e) => e.status.includes(activeFilter))
              .map((post, index) => {
                return (
                  <Card key={index} title={post.title} status={post.status} />
                );
              })}
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};
export default Home;
