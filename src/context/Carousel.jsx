import React, { useEffect, useState } from "react";
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
  const [paused, setPaused] = useState(false);


  //update the updateIndex function above with the following instead...
  const updateIndex = (newIndex) => {
    const numCards = calculateNumCards();
    const totalCards = React.Children.count(children);
    const maxIndex = Math.ceil(totalCards / numCards) - 1;

    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > maxIndex) {
      newIndex = maxIndex;
    }

    setActiveIndex(newIndex);
};

//end of corrective snippet
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

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

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(true)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * (100 / numCards)}%)` }}
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
        {Array.from({ length: Math.ceil(React.Children.count(children) / numCards) }).map((_, index) => {
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
