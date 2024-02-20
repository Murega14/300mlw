import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import './Carousel.css';

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transformPosition, setTransformPosition] = useState(0);

  //update the updateIndex function above with the following instead...
  const updateIndex = (newIndex) => {
    const numCards = calculateNumCards();
    const totalCards = React.Children.count(children);
    const slidesToShow = totalCards <=4 ? totalCards: 4;
    const maxIndex = Math.ceil(totalCards / numCards) - 1;
    const newStartingIndex = newIndex * slidesToShow;
      setActiveIndex(newIndex);

    // Calculate the position of the new slide set
    const newPosition = newStartingIndex * (100 / slidesToShow);
    setTransformPosition(newPosition);

    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > maxIndex) {
      newIndex = maxIndex;
    }

    setActiveIndex(newIndex);
};

//end of corrective snippet
 

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (activeIndex < Math.ceil(React.Children.count(children) / numCards) - 1 - (numCards - 1)) {
        updateIndex(activeIndex + 1);
      }
    },
    onSwipedRight: () => {
      if (activeIndex > 0) {
        updateIndex(activeIndex - 1);
      }
    }
  });

  const calculateCardWidth = () => {
    const screenWidth = window.innerWidth;
    let numCards = 4; // Default to 1 card if screen width is too small
    if (screenWidth >= 768) {
      numCards = 3;
    }
    if (screenWidth >= 1024) {
      numCards = 4;
    }
    return `${100 / numCards}%`;
  };

  const calculateNumCards = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      return 4;
    } else if (screenWidth >= 768) {
      return 3;
    } else {
      return 2;
    }
  };

  const numCards = calculateNumCards();
  const totalCards = React.Children.count(children);

  return (
    <div
      {...handlers}
      className="carousel"
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${transformPosition}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          const width = calculateCardWidth();
          return React.cloneElement(child, { width });
        })}
      </div>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          &lt;
        </button>
        {Array.from({ length: Math.ceil(totalCards / numCards) }).map((_, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export { Carousel };
