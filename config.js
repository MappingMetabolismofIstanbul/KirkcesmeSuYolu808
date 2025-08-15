var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Kırkçeşme  Suyolları / Kırkçeşme Waterways',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden:true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.964, 41.169],
                zoom:10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'centered',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/XZRLtZfk/MEF-AAP-027-BAP-2025-08-09-13-40-02.png',
            description: '',
            location: {
                center: [28.964, 41.169],
                zoom: 17,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/pBYqRGmb/MEF-AAP-027-BAP-2025-07-17-11-39-04.png',
            description: 'Kirazlı Bend, Kırkçeşme Suyolları’na bağlıdır.',
            location: {
                center: [28.964, 41.169],
                zoom: 17,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',     
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/fVSy0P67/MEF-AAP-027-BAP-2025-07-17-11-39-56.png',
            description: '',
            location: {
                center: [28.964, 41.169],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/bRzVzdxB/MEF-AAP-027-BAP-2025-07-15-12-33-46.png',
            description: '',
            location: {
                center: [28.933, 41.160],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.933, 41.160],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'seven-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.922, 41.147],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eight-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/KJ0GY32/MEF-AAP-027-BAP-2025-07-15-12-28-28.png',
            description: '',
            location: {
                center: [28.896, 41.143],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'nine-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/DgDj8947/MEF-AAP-027-BAP-2025-07-15-12-29-34.png',
            description: '',
            location: {
                center: [28.900, 41.117],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ten-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/nNN7R31s/MEF-AAP-027-BAP-2025-07-15-12-30-47.png',
            description: '',
            location: {
                center: [28.914, 41.097],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleven-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.911, 41.076],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelve-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.926, 41.046],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'thirteen-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.939, 41.031],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourteen-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.952, 41.023],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         { 
            id: 'fifteen-chapter',
            alignment: 'right',   
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/1GYQdvxC/MEF-AAP-027-BAP-2025-07-15-12-44-35.png',
            description: 'Kırkçeşmeler, Kırkçeşme Suyolları’na bağlıdır.',
            location: {
                center: [28.956, 41.017],
                zoom: 17,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        { 
            id: 'sixteen-chapter',
            alignment: 'left',   
            hidden: false,
            title: '',
            image: '',
            description: '',
            location: {
                center: [28.973, 41.014],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         { 
            id: 'seventeen-chapter',
            alignment: 'centered',   
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/Z1MJT5Mb/MEF-AAP-027-BAP-2025-08-09-13-13-09.png',
            description: '',
            location: {
                center: [28.973, 41.014],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         { 
            id: 'eighteen-chapter',
            alignment: 'right',   
            hidden: false,
            title: '',
            image: 'https://i.ibb.co/hRndBFY2/MEF-AAP-027-BAP-2025-08-13-20-38-23.png',
            description: '',
            location: {
                center: [28.973, 41.014],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
       
    ]
};




