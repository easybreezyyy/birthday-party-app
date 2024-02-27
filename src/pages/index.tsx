import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import moment from "moment";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter();

  const handleOkay = () => {
    router.push("/party/detail");
  }

  //생일짤
  const [randomNum, setRandomNum] = useState<number>(getRandom);

  // useEffect(()=>{
  //   setRandomNum(getRandom)
  // },[]);

  function getRandom(){
    const num = Math.floor(Math.random() * 4) + 1;
    return num;
  }

  const [name, setName] = useState<string>("백예은");
  const [birthday , setBirthday] = useState<string>("2024-02-21");
  const [day, setDay] = useState<string>("수");
  const [dday, setDday] = useState<boolean>(false);

  //생일 디데이 계산
  useEffect(()=>{
    if (moment().diff(moment(birthday), 'd') < 1) {
      setDday(true);
      return;
    }
  },[birthday]);
  

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} gap-8`}
    >

      {/* TODO i need moment to calculate date */}
      <div>
        <h1 className="leading-relaxed font-primary font-extrabold text-lg text-center text-palette-primary mt-4 py-2 sm:py-4">
          이번 공주님 : {name}👸🏻 <br/>
        </h1>
        <p className="max-w-xl text-center px-2 mx-auto text-base text-gray-600">
          {birthday} {day} <br/>
         {dday && `D-day`}
        </p>
      </div>

      {/* TODO randomize images */}
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        {
          randomNum &&
            <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={`/${randomNum}.jpg`}
            alt="생일짤"
            width={600}
            height={400}
            priority
            />
        }
      </div>

      {/* <div className="flex flex-row gap-4 max-w-sm w-full"> */}
        <div className="flex flex-col items-start space-y-1 flex-grow max-w-md">
          <label className="text-gray-500 text-base">생일자</label>
          <select
            className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
          >
            <option>이지수</option>
            <option>백예은</option>
          </select>
        <button
          type="button"
          onClick={handleOkay}
          className="bg-palette-primary text-white text-md font-primary font-semibold pt-2 pb-1 leading-relaxed flex 
          justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none hover:bg-palette-dark rounded w-full"
        >확인</button>
        </div>
      {/* </div> */}


    </main>
  );
}
