import RetrieveLists from "@/components/post_lists"
import TopNav from "@/components/gnb"
import GitHubContent from "@/components/post_contents"

export default function Home() {
  return (
    <div>
      <TopNav />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
          <RetrieveLists />
        </div>
        <div className="lg:pl-[19.5rem]">
          <GitHubContent downloadUrl="https://raw.githubusercontent.com/jongwony/pages/main/posts/2021-09-10-awscli-windows.md" />
        </div>
      </div>
    </div>
  )
}