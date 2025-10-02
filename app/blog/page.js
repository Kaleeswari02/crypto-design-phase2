'use client';

export default function BlogPage() {
  return (
    <div>
      <div className="flex flex-col bg-white">
        <div className="self-stretch bg-white h-[1120px]">
          <div className="flex flex-col items-start self-stretch bg-lightdark pt-[45px]">
            <div className="flex items-start self-stretch mb-[27px] mx-[220px]">
              <button
                className="flex flex-col shrink-0 items-start bg-transparent text-left py-[13px] px-4 mt-[1px] rounded-xl border border-solid border-black"
                onClick={() => alert('Pressed!')}
              >
                <div className="flex flex-col items-start bg-black py-2.5 px-[30px] rounded-[30px]">
                  <span className="text-white text-lg font-dreiviertelfett">
                    Back
                  </span>
                </div>
              </button>
              <div className="flex-1 self-stretch"></div>
              <button
                className="flex flex-col shrink-0 items-start text-left py-3 px-[11px] mr-[9px] rounded-md border-0"
                onClick={() => alert('Pressed!')}
              >
                <img
                  src="assets/share-icon.png"
                  className="w-14  object-fill"
                />
              </button>
              <button
                className="flex flex-col shrink-0 items-start text-left py-3 px-[11px] rounded-md border-0"
                onClick={() => alert('Pressed!')}
              >
                <img
                  src="assets/copylink-icon.png"
                  className="w-14 object-fill"
                />
              </button>
            </div>
            <span className="text-white text-[46px] font-halbfett  w-[717px] mb-[55px] ml-[220px]">
              Lorem ipsum dolor sit amet, consectetur...
            </span>
            <img
              src="assets/blog-banner.png"
              className="self-stretch h-[480px] mb-5 mx-[220px] object-fill"
            />
            <div className="self-stretch h-[158px] mx-[316px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
