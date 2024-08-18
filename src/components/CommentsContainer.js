import React from "react";
import CommentsList from "./CommentsList";

const CommentsContainer = () => {
  const commentsData = [
    {
      name: "Pallavi Gupta",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      replies: [
        {
          name: "Pallavi Gupta",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          replies: [
            {
                name: "Pallavi Gupta",
                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                replies: [
                    {
                        name: "Pallavi Gupta",
                        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                        replies: [
                            {
                                name: "Pallavi Gupta",
                                text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                                replies: [],
                              },
                        ],
                      },
                ],
              },
          ],
        },
      ],
    },
    {
      name: "Prachi Gupta",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      replies: [],
    },
    {
      name: "Prachi Gupta",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      replies: [
        {
          name: "Pallavi Gupta",
          text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          replies: [
            {
              name: "Pallavi Gupta",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
              replies: [
                {
                  name: "Pallavi Gupta",
                  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                  replies: [],
                },
                {
                  name: "Pallavi Gupta",
                  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                  replies: [
                    {
                      name: "Pallavi Gupta",
                      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  return <div className="m-5 p-2 w-[900px]">
    <h1 className="text-2xl font-bold">Comments</h1>
    <CommentsList comments={commentsData}/>
  </div>;
};

export default CommentsContainer;
