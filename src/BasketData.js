const courses = [
    {
        id: 0,
        basket: 1,
        name: 'Data Management in Mobile and Sensor Networks',
        abbr: 'DMMSN',
        type: {
          L: [
            {
              day: "Tuesday",
              slot: 1,
              room: "CC3-5106",
            },
          ],
          T: [
            {
              day: "Friday",
              slot: 2,
              room: "CC2-4205",
            },
          ],
          P: [
            {
              day: "Thursday",
              slot: 4,
              room: "CC3-5404",
            },
          ],
        },
      },
      {
        id: 1,
        basket: 1,
        name: 'Virtual Reality',
        abbr: 'VR',
        type: {
          L: [
            {
              day: "Friday",
              slot: 2,
              room: "CC3-5155",
            },
          ],
          T: [
            {
              day: "Thursday",
              slot: 4,
              room: "CC3-5207",
            },
          ],
          P: [
            {
              day: "Tuesday",
              slot: 1,
              room: "CC3-5422",
            },
          ],
        },
      },
      {
        id: 2,
        basket: 1,
        name: 'Visual Recognition',
        abbr: 'VRN',
        type: {
          L: [
            {
              day: "Thursday",
              slot: 1,
              room: "CC3-5206",
            },
          ],
          T: [
            {
              day: "Wednesday",
              slot: 2,
              room: "CC3-5206",
            },
          ],
          P: [
            {
              day: "Thursday",
              slot: 5,
              room: "CC3-5403",
            },
          ],
        },
      },
      {
        id: 3,
        basket: 1,
        name: 'Embedded System and IoT',
        abbr: 'ESIOT',
        type: {
          L: [
            {
              day: "Thursday",
              slot: 1,
              room: "CC3-5207",
            },
          ],
          T: [
            {
              day: "Wednesday",
              slot: 2,
              room: "CC2-4105",
            },
          ],
          P: [
            {
              day: "Wednesday",
              slot: 5,
              room: "CC3-5403",
            },
          ],
        },
      },
      {
        id: 4,
        basket: 2,
        name: 'Information Retrieval',
        abbr: 'IR',
        type: {
          L: [
            {
              day: "Monday",
              slot: 1,
              room: "CC3-5155",
            },
          ],
          T: [
            {
              day: "Friday",
              slot: 4,
              room: "CC3-5155",
            },
          ],
          P: [
            {
              day: "Monday",
              slot: 4,
              room: "CC3-5403",
            },
          ],
        },
      },
      {
        id: 5,
        basket: 2,
        name: 'Convex Optimization',
        abbr: 'CO',
        type: {
          L: [
            {
              day: "Monday",
              slot: 2,
              room: "CC2-4205",
            },
          ],
          T: [
            {
              day: "Tuesday",
              slot: 2,
              room: "CC2-4205",
            },
          ],
          P: [
            {
              day: "Tuesday",
              slot: 4,
              room: "CC3-5403",
            },
          ],
        },
      },
      {
        id: 6,
        basket: 2,
        name: 'Big Data Analytics',
        abbr: 'BDA',
        type: {
          L: [
            {
              day: "Monday",
              slot: 1,
              room: "CC3-5206",
            },
          ],
          T: [
            {
              day: "Friday",
              slot: 4,
              room: "CC3-5106",
            },
          ],
          P: [
            {
              day: "Tuesday",
              slot: 4,
              room: "CC3-5404",
            },
          ],
        },
      },
      {
        id: 7,
        basket: 3,
        name: 'Time Series Data Analytics',
        abbr: 'TSDA',
        type: {
          L: [
            {
              day: "Wednesday",
              slot: 1,
              room: "CC3-5206",
            },
          ],
          T: [
            {
              day: "Monday",
              slot: 5,
              room: "CC3-5206",
            },
          ],
          P: [
            {
              day: "Wednesday",
              slot: 4,
              room: "CC3-5403",
            },
          ],
        },
      },
      {
        id: 8,
        basket: 3,
        name: 'Parallel and Distributed System',
        abbr: 'PDC',
        type: {
          L: [
            {
              day: "Thursday",
              slot: 2,
              room: "CC2-4205",
            },
          ],
          T: [
            {
              day: "Friday",
              slot: 1,
              room: "CC3-5206",
            },
          ],
          P: [
            {
              day: "Tuesday",
              slot: 5,
              room: "CC3-5403",
            },
          ],
        },
      },
      {
        id: 9,
        basket: 2,
        name: 'Cyber Security and Digital Forensic',
        abbr: 'CSDF',
        type: {
          L: [
            {
              day: "Monday",
              slot: 4,
              room: "CC3-5254",
            },
          ],
          T: [
            {
              day: "Friday",
              slot: 5,
              room: "CC3-5207",
            },
          ],
          P: [
            {
              day: "Tuesday",
              slot: 4,
              room: "CC3-5403",
            },
          ],
        },
      },
      {
        id: 10,
        basket: 3,
        name: 'Bioinformatics',
        abbr: 'BIO',
        type: {
          L: [
            {
              day: "Wednesday",
              slot: 1,
              room: "CC3-5207",
            },
          ],
          T: [
            {
              day: "Monday",
              slot: 5,
              room: "CC3-5207",
            },
          ],
          P: [
            {
              day: "Wednesday",
              slot: 4,
              room: "CC3-5404",
            },
          ],
        },
      },
      {
        id: 11,
        basket: 3,
        name: 'Next Generation Sequencing',
        abbr: 'NGS',
        type: {
          L: [
            {
              day: "Wednesday",
              slot: 4,
              room: "CC3-5155",
            },
          ],
          T: [
            {
              day: "Friday",
              slot: 1,
              room: "LT-3113",
            },
          ],
          P: [
            {
              day: "Wednesday",
              slot: 1,
              room: "CC3-5404",
            },
          ],
        },
      },
      {
        id: 12,
        basket: 1,
        name: 'Radar and satelite Communication',
        abbr: 'RSC',
        type: {
          L: [
            {
              day: "Wednesdy",
              slot: 2,
              room: "2121",
            },
          ],
          T: [
            {
              day: "Friday",
              slot: 2,
              room: "2121",
            },
          ],
          P: [
            {
              day: "Thursday",
              slot: 4,
              room: " ",
            },
          ],
        },
      },
      {
        id: 13,
        basket: 1,
        name: 'RFIC Design',
        abbr: 'RFIC',
        type: {
          L: [
            {
              day: "Monday",
              slot: 3,
              room: "5254",
            },
            {
              day: "Wednesday",
              slot: 2,
              room: "2302",
            },
          ],
          T: [
          
          ],
          P: [
            {
              day: "Thursday",
              slot: 4,
              room: " ",
            },
          ],
        },
      },
      {
        id: 14,
        basket: 1,
        name: 'High Speed Devices',
        abbr: 'HSD',
        type: {
          L: [
            {
              day: "Monday",
              slot: 3,
              room: "2223",
            },
            {
              day: "Wednesday",
              slot: 2,
              room: "2223"
            },
          ],
          T: [
            {
              day: "Friday",
              slot: 2,
              room: "2223",
            },
          ],
          P: [
            
          ],
        },
      },
      {
        id: 15,
        basket: 2,
        name: 'Low Power System Design',
        abbr: 'LPSD',
        type: {
          L: [
            {
              day: "Monday",
              slot: 4,
              room: "2121",
            },
            {
              day: "Wednesday",
              slot: 3,
              room: "2121"

            },
          ],
          T: [
            {
              day: "Tuesday",
              slot: 2,
              room: "2121",
            },
          ],
          P: [
            
          ],
        },
      },
      {
        id: 16,
        basket: 2,
        name: 'Microwave Remote Sensing',
        abbr: 'MRS',
        type: {
          L: [
            {
              day: "Monday",
              slot: 2,
              room: "CC3-5254",
            },
            {
              day: "Wednesday",
              slot: 3,
              room: "5254"
            },
          ],
          T: [
            {
              day: "Tuesday",
              slot: 4,
              room: "CC3-5254",
            },
          ],
          P: [
            
          ],
        },
      },
      {
        id: 17,
        basket: 2,
        name: 'MIMO Communication',
        abbr: 'MIMO',
        type: {
          L: [
            {
              day: "Monday",
              slot: 4,
              room: "2223",
            },
            {
              day: "Wednesday",
              slot: 3,
              room: "2223"

            },
          ],
          T: [
            {
              day: "Tuesday",
              slot: 4,
              room: "2223",
            },
          ],
          P: [
            
          ],
        },
      },
      {
        id: 18,
        basket: 3,
        name: 'Speech Signal Processing',
        abbr: 'SSP',
        type: {
          L: [
            {
              day: "Tuesday",
              slot: 3,
              room: "2223",
            },
            {
              day: "Thursday",
              slot: 2,
              room: "2302"
            },
          ],
          T: [
            {
              day: "Monday",
              slot: 5,
              room: "2223",
            },
          ],
          P: [
            
          ],
        },
      },
      {
        id: 19,
        basket: 3,
        name: 'Emerging Nano-electronic Devices',
        abbr: 'ENED',
        type: {
          L: [
            {
              day: "Tuesday",
              slot: 3,
              room: "2121",
            },
            {
              day: "Thursday",
              slot: 2,
              room: "2121",
            },
          ],
          T: [
            {
              day: "Monday",
              slot: 5,
              room: "2121",
            },
          ],
          P: [
            
          ],
        },
      },
      {
        id: 20,
        basket: 3,
        name: 'Micro Electromechanical Systems',
        abbr: 'MEMS',
        type: {
          L: [
            {
              day: "Tuesday",
              slot: 3,
              room: "5254",
            },
            {
              day: "Thursday",
              slot: 2,
              room: "2223"

            }
          ],
          T: [
            {
              day: "Wednesday",
              slot: 4,
              room: "5254",
            },
          ],
          P: [
            
          ],
        },
      },
];

export const dropdownOptions1 = courses.
    filter((course) => course.basket === 1)
    .map((course) => ({
        value: course.id,
        label: course.name,
    }));

export const dropdownOptions2 = courses.
    filter((course) => course.basket === 2)
    .map((course) => ({
        value: course.id,
        label: course.name,
    }));

export const dropdownOptions3 = courses.
    filter((course) => course.basket === 3)
    .map((course) => ({
        value: course.id,
        label: course.name,
    }));

export default courses;
