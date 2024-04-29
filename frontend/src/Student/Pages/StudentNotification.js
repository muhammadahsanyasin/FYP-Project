import React, { useState, useRef } from 'react';

function StudentNotification() {

  const [offset, setOffset] = useState(0);
  const arr = ['Abdullah', 'Adeel', 'Umer', 'Zia'];
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const contentOffsetX = event.target.scrollLeft;
    const index = Math.round(contentOffsetX / 360);
    setOffset(index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.progress}>
        <>
          <div
            style={{
              width: 200,
              height: 200,
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 1,
              }}
            >
              {`${59} / ${100}`}
            </div>
            <svg width="200" height="200">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#2FAA98"
                strokeWidth="7"
                strokeDasharray={`${(59 / 100) * 565.48} 565.48`}
                transform="rotate(-90, 100, 100)"
              />
            </svg>
          </div>
          <div
            style={{
              fontSize: 18,
              color: 'white',
              textAlign: 'center',
              marginTop: -70,
              marginBottom: 80,
            }}
          >
            Journeys Used
          </div>
        </>
      </div>
      <div style={styles.MyFavStop}>
        <div style={styles.MyFavStopTitle}>
          <div
            style={{
              fontSize: 27,
              fontWeight: 'bold',
              color: '#168070',
              textAlign: 'center',
            }}
          >
            Favourite Stops
          </div>
        </div>
        <div
          style={{
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            display: 'flex',
            scrollBehavior: 'smooth',
          }}
          onScroll={handleScroll}
          ref={scrollViewRef}
        >
          {arr.map((item, ind) => (
            <div
              key={ind}
              style={{
                border: '1px solid white',
                width: 360,
                margin: 10,
                marginTop: 20,
                borderRadius: 30,
              }}
            >
              <div
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                  marginTop: 10,
                }}
              >
                Chandni Chowk
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: 'white',
                  textAlign: 'center',
                  marginTop: 5,
                }}
              >
                Route # 10
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}
        >
          {arr.map((item, ind) => (
            <div
              key={ind}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignSelf: 'center',
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  borderColor: 'white',
                  borderWidth: 1,
                  marginHorizontal: 5,
                  backgroundColor: ind === offset ? 'white' : 'transparent',
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#168070',
  },
  progress: {
    alignItems: 'center',
  },
  MyFavStop: {
    backgroundColor: '#168070',
    width: 380,
    borderRadius: 30,
    elevation: 10,
  },
  MyFavStopTitle: {
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    width: 380,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 40,
  },
}

export default StudentNotification
