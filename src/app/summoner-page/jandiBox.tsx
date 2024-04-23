import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import LazyLoadedMonthMejaiCard from "@/app/summoner-page/LazyLoadedMonthMejaiCard";

export default function JandiBox() {
  const nowMonth = new Date().getMonth() + 1;

  return (
    <div className="flex justify-center flex-col items-center">
      <Carousel
        opts={{ align: "center", loop: true, startIndex: nowMonth - 1 }}
        className="w-full max-w-x flex flex-col "
      >
        <CarouselContent>
          {Array.from({ length: nowMonth }).map((_, index) => (
            <CarouselItem key={index}>
              <LazyLoadedMonthMejaiCard month={index + 1} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}