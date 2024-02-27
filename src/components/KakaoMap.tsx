import Script from 'next/script';
import { useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=48c07e7f2bda3da27bda7fb8c1b47259&autoload=false`;

const KakaoMap = () => {

  useEffect(()=>{
    console.log("카카오맵")
  },[])

  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map 
        center={{ lat: 33.450701, lng: 126.570667 }} 
        style={{ width: '100%', height: '100%' }}>
            <MapMarker position={{ lat: 37.56542720091201, lng: 126.98162080000006 }}>
              <div style={{color:"#000"}}>롯데호텔 델리카한스</div>
            </MapMarker>
    </Map>
    </>
  );
};

export default KakaoMap;