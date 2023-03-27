import React from "react"
import Icon from "@/assets/img/map-marker-alt .svg"

const IconInfoMd = () => {
  return (
    <div className="icon-info-md flex ">
      <div className="icon-info__icon flex justify-center items-center w-12 h-12 bg-gray-light-2 rounded mr-3">
        <figure>
          <img src={Icon} alt="" />
        </figure>
      </div>
      <div className="icon-info__info">
        <span className="text-sm font-semibold text-gray-100">Dirección</span>
        <p className="font-semibold text-gray-400">
          Calle 73 sur # 92-85 torre 25 ATP 402
        </p>
      </div>
    </div>
  )
}

export default IconInfoMd
