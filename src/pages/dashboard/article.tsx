import Navbar from "@/ui/components/layout/Navbar";
import ArticleDesktop from "@/ui/pages/Dashboard/ArticleDesktop";
import ArticleMobile from "@/ui/pages/Dashboard/ArticleMobile";
import React from "react";

function Article() {
  return (
    <>
      <ArticleDesktop />
      <ArticleMobile />
    </>
  );
}

export default Article;





















{/*}
            <div className="flex justify-center">
                <div className="border-2 border-blue-700 h-[300px] w-[95%] mt-12">
                    <div className="bg-[#e1e1e1] border-b-2 border-blue-700 h-[50px] w-[100%] flex items-center">
                        <ChevronUp className="ml-4 w-8 h-8 "/>
                        Uniforme
                    </div>
                </div>
            </div>
            {*/}