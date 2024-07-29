import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item) => (
          <BentoGridItem
           id={item.id}
           key={item.id}
           title={item.title}
           description={item.description}
           className={item.className}
           imgClassName={item.imgClassName}
           img={item.img}
           titleClassName={item.titleClassName}
           spareImg={item.spareImg} 
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;