import { motion } from "framer-motion";

const AnimatedArchiveLogo = ({ widthClass = "w-28" }) => {
  return (
    <div className={widthClass}>
      <svg
        id="svg-logo-ani"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0, 0, 400, 400"
      >
        <g id="svg-logo-ani-g">
          <path
            id="svg-logo-ani-background"
            d="M30.400 0.291 C 29.630 0.382,28.829 0.624,28.620 0.829 C 28.411 1.033,27.837 1.200,27.344 1.200 C 26.851 1.200,26.336 1.380,26.200 1.600 C 26.064 1.820,25.513 2.000,24.976 2.000 C 24.439 2.000,24.000 2.180,24.000 2.400 C 24.000 2.620,23.640 2.800,23.200 2.800 C 22.760 2.800,22.400 2.980,22.400 3.200 C 22.400 3.420,22.040 3.600,21.600 3.600 C 21.160 3.600,20.800 3.780,20.800 4.000 C 20.800 4.220,20.440 4.400,20.000 4.400 C 19.560 4.400,19.200 4.580,19.200 4.800 C 19.200 5.020,18.912 5.200,18.560 5.200 C 18.209 5.200,17.417 5.740,16.800 6.400 C 16.183 7.060,15.483 7.600,15.243 7.600 C 14.218 7.600,7.600 14.206,7.600 15.229 C 7.600 15.476,7.060 16.183,6.400 16.800 C 5.740 17.417,5.200 18.209,5.200 18.560 C 5.200 18.912,5.020 19.200,4.800 19.200 C 4.580 19.200,4.400 19.560,4.400 20.000 C 4.400 20.440,4.220 20.800,4.000 20.800 C 3.780 20.800,3.600 21.160,3.600 21.600 C 3.600 22.040,3.420 22.400,3.200 22.400 C 2.980 22.400,2.800 22.760,2.800 23.200 C 2.800 23.640,2.620 24.000,2.400 24.000 C 2.180 24.000,2.000 24.439,2.000 24.976 C 2.000 25.513,1.820 26.064,1.600 26.200 C 1.380 26.336,1.200 26.851,1.200 27.344 C 1.200 27.837,0.975 28.465,0.700 28.740 C -0.036 29.476,-0.036 370.524,0.700 371.260 C 0.975 371.535,1.200 372.163,1.200 372.656 C 1.200 373.149,1.380 373.664,1.600 373.800 C 1.820 373.936,2.000 374.487,2.000 375.024 C 2.000 375.561,2.180 376.000,2.400 376.000 C 2.620 376.000,2.800 376.360,2.800 376.800 C 2.800 377.240,2.980 377.600,3.200 377.600 C 3.420 377.600,3.600 377.960,3.600 378.400 C 3.600 378.840,3.780 379.200,4.000 379.200 C 4.220 379.200,4.400 379.560,4.400 380.000 C 4.400 380.440,4.580 380.800,4.800 380.800 C 5.020 380.800,5.200 381.088,5.200 381.440 C 5.200 381.791,5.740 382.583,6.400 383.200 C 7.060 383.817,7.600 384.517,7.600 384.757 C 7.600 385.782,14.206 392.400,15.229 392.400 C 15.476 392.400,16.183 392.940,16.800 393.600 C 17.417 394.260,18.209 394.800,18.560 394.800 C 18.912 394.800,19.200 394.980,19.200 395.200 C 19.200 395.420,19.560 395.600,20.000 395.600 C 20.440 395.600,20.800 395.780,20.800 396.000 C 20.800 396.220,21.160 396.400,21.600 396.400 C 22.040 396.400,22.400 396.580,22.400 396.800 C 22.400 397.020,22.760 397.200,23.200 397.200 C 23.640 397.200,24.000 397.380,24.000 397.600 C 24.000 397.820,24.439 398.000,24.976 398.000 C 25.513 398.000,26.064 398.180,26.200 398.400 C 26.336 398.620,26.851 398.800,27.344 398.800 C 27.837 398.800,28.465 399.025,28.740 399.300 C 29.476 400.036,370.524 400.036,371.260 399.300 C 371.535 399.025,372.163 398.800,372.656 398.800 C 373.149 398.800,373.664 398.620,373.800 398.400 C 373.936 398.180,374.487 398.000,375.024 398.000 C 375.561 398.000,376.000 397.820,376.000 397.600 C 376.000 397.380,376.360 397.200,376.800 397.200 C 377.240 397.200,377.600 397.020,377.600 396.800 C 377.600 396.580,377.960 396.400,378.400 396.400 C 378.840 396.400,379.200 396.220,379.200 396.000 C 379.200 395.780,379.560 395.600,380.000 395.600 C 380.440 395.600,380.800 395.420,380.800 395.200 C 380.800 394.980,381.088 394.800,381.440 394.800 C 381.791 394.800,382.583 394.260,383.200 393.600 C 383.817 392.940,384.524 392.400,384.771 392.400 C 385.794 392.400,392.400 385.782,392.400 384.757 C 392.400 384.517,392.940 383.817,393.600 383.200 C 394.260 382.583,394.800 381.791,394.800 381.440 C 394.800 381.088,394.980 380.800,395.200 380.800 C 395.420 380.800,395.600 380.440,395.600 380.000 C 395.600 379.560,395.780 379.200,396.000 379.200 C 396.220 379.200,396.400 378.840,396.400 378.400 C 396.400 377.960,396.580 377.600,396.800 377.600 C 397.020 377.600,397.200 377.240,397.200 376.800 C 397.200 376.360,397.380 376.000,397.600 376.000 C 397.820 376.000,398.000 375.561,398.000 375.024 C 398.000 374.487,398.180 373.936,398.400 373.800 C 398.620 373.664,398.800 373.149,398.800 372.656 C 398.800 372.163,399.025 371.535,399.300 371.260 C 400.036 370.524,400.036 29.476,399.300 28.740 C 399.025 28.465,398.800 27.837,398.800 27.344 C 398.800 26.851,398.620 26.336,398.400 26.200 C 398.180 26.064,398.000 25.513,398.000 24.976 C 398.000 24.439,397.820 24.000,397.600 24.000 C 397.380 24.000,397.200 23.640,397.200 23.200 C 397.200 22.760,397.020 22.400,396.800 22.400 C 396.580 22.400,396.400 22.040,396.400 21.600 C 396.400 21.160,396.220 20.800,396.000 20.800 C 395.780 20.800,395.600 20.440,395.600 20.000 C 395.600 19.560,395.420 19.200,395.200 19.200 C 394.980 19.200,394.800 18.912,394.800 18.560 C 394.800 18.209,394.260 17.417,393.600 16.800 C 392.940 16.183,392.400 15.476,392.400 15.229 C 392.400 14.206,385.782 7.600,384.757 7.600 C 384.517 7.600,383.817 7.060,383.200 6.400 C 382.583 5.740,381.791 5.200,381.440 5.200 C 381.088 5.200,380.800 5.020,380.800 4.800 C 380.800 4.580,380.440 4.400,380.000 4.400 C 379.560 4.400,379.200 4.220,379.200 4.000 C 379.200 3.780,378.840 3.600,378.400 3.600 C 377.960 3.600,377.600 3.420,377.600 3.200 C 377.600 2.980,377.240 2.800,376.800 2.800 C 376.360 2.800,376.000 2.620,376.000 2.400 C 376.000 2.180,375.561 2.000,375.024 2.000 C 374.487 2.000,373.936 1.820,373.800 1.600 C 373.664 1.380,373.149 1.200,372.656 1.200 C 372.163 1.200,371.535 0.975,371.260 0.700 C 370.782 0.222,34.383 -0.182,30.400 0.291"
            stroke="#2872af"
            fill="#2872af"
            fillRule="evenodd"
          />
          <motion.path
            id="svg-logo-ani-letterA-animated"
            d="M184.600 80.262 C 177.288 80.461,163.920 81.516,157.600 82.394 C 156.170 82.592,153.470 82.966,151.600 83.225 C 96.919 90.787,65.200 119.379,68.419 158.204 C 70.439 182.556,82.861 198.559,102.400 201.978 C 111.526 203.575,123.454 202.886,129.800 200.395 C 130.240 200.222,131.230 199.848,132.000 199.563 C 145.529 194.558,155.691 176.329,156.675 155.300 L 156.923 150.000 143.280 150.000 L 129.636 150.000 129.439 151.300 C 129.330 152.015,129.142 154.314,129.019 156.409 C 128.177 170.830,120.821 178.815,110.200 176.839 C 101.021 175.130,95.959 166.724,95.980 153.219 C 96.017 128.492,113.229 114.358,149.800 109.026 C 161.818 107.274,191.596 105.423,192.194 106.390 C 192.310 106.578,191.609 108.953,190.635 111.666 C 189.661 114.380,188.387 117.950,187.804 119.600 C 187.220 121.250,186.585 122.960,186.392 123.400 C 186.198 123.840,185.771 125.010,185.442 126.000 C 185.113 126.990,184.450 128.880,183.969 130.200 C 183.488 131.520,182.418 134.490,181.591 136.800 C 179.536 142.537,174.778 155.730,173.006 160.600 C 172.206 162.800,171.283 165.410,170.956 166.400 C 170.628 167.390,170.207 168.560,170.020 169.000 C 169.834 169.440,169.464 170.430,169.200 171.200 C 168.936 171.970,168.570 172.960,168.386 173.400 C 168.203 173.840,167.489 175.820,166.798 177.800 C 166.107 179.780,165.195 182.345,164.771 183.500 C 164.347 184.655,163.640 186.590,163.200 187.800 C 162.760 189.010,162.051 190.945,161.623 192.100 C 161.196 193.255,159.834 197.080,158.595 200.600 C 157.357 204.120,155.889 208.170,155.333 209.600 C 154.778 211.030,154.061 213.010,153.741 214.000 C 153.421 214.990,152.998 216.160,152.800 216.600 C 152.602 217.040,152.173 218.210,151.847 219.200 C 151.520 220.190,150.685 222.530,149.991 224.400 C 149.297 226.270,148.584 228.250,148.406 228.800 C 148.229 229.350,146.156 235.110,143.800 241.600 C 141.444 248.090,139.371 253.850,139.194 254.400 C 139.016 254.950,138.303 256.930,137.609 258.800 C 136.915 260.670,136.080 263.010,135.753 264.000 C 135.427 264.990,135.006 266.160,134.819 266.600 C 134.631 267.040,134.100 268.435,133.639 269.700 C 133.178 270.965,132.453 272.945,132.029 274.100 C 131.605 275.255,130.692 277.820,130.000 279.800 C 128.602 283.800,127.905 285.715,125.924 291.000 L 124.575 294.600 113.487 294.706 L 102.400 294.813 102.400 307.608 L 102.400 320.404 138.700 320.302 L 175.000 320.200 175.000 307.600 L 175.000 295.000 165.213 294.893 C 153.913 294.769,154.447 294.980,155.750 291.152 C 156.303 289.529,158.303 283.700,160.194 278.200 C 162.086 272.700,164.444 265.770,165.435 262.800 C 166.426 259.830,167.375 257.130,167.544 256.800 C 167.713 256.470,168.290 254.806,168.825 253.102 L 169.800 250.004 217.054 250.002 L 264.308 250.000 264.969 252.100 C 265.333 253.255,265.797 254.560,266.001 255.000 C 266.205 255.440,267.181 258.230,268.170 261.200 C 269.756 265.963,277.323 288.149,278.913 292.700 C 279.239 293.635,279.482 294.437,279.453 294.482 C 279.424 294.528,274.900 294.663,269.400 294.782 L 259.400 295.000 259.400 307.600 L 259.400 320.200 295.700 320.302 L 332.000 320.404 332.000 307.602 L 332.000 294.800 320.790 294.800 L 309.580 294.800 309.152 293.700 C 308.917 293.095,307.919 290.350,306.934 287.600 C 303.312 277.488,302.824 276.133,301.598 272.800 C 300.910 270.930,300.080 268.590,299.753 267.600 C 299.427 266.610,298.998 265.440,298.800 265.000 C 298.602 264.560,298.173 263.390,297.847 262.400 C 297.520 261.410,296.685 259.070,295.991 257.200 C 295.297 255.330,294.580 253.350,294.398 252.800 C 294.217 252.250,292.863 248.470,291.390 244.400 C 289.917 240.330,288.035 235.110,287.209 232.800 C 286.382 230.490,285.308 227.520,284.821 226.200 C 284.335 224.880,283.785 223.350,283.599 222.800 C 283.227 221.700,281.485 216.860,277.410 205.600 C 275.937 201.530,274.583 197.750,274.402 197.200 C 274.220 196.650,273.503 194.670,272.809 192.800 C 272.115 190.930,271.280 188.590,270.953 187.600 C 270.627 186.610,270.198 185.440,270.000 185.000 C 269.802 184.560,269.373 183.390,269.047 182.400 C 268.720 181.410,267.890 179.070,267.202 177.200 C 266.514 175.330,265.435 172.360,264.804 170.600 C 264.173 168.840,262.816 165.060,261.788 162.200 C 260.761 159.340,259.409 155.560,258.784 153.800 C 258.159 152.040,257.086 149.070,256.398 147.200 C 255.710 145.330,254.880 142.990,254.553 142.000 C 254.227 141.010,253.801 139.840,253.607 139.400 C 253.413 138.960,252.690 136.980,252.000 135.000 C 251.310 133.020,250.587 131.040,250.393 130.600 C 250.199 130.160,249.773 128.990,249.447 128.000 C 249.120 127.010,248.289 124.670,247.600 122.800 C 246.911 120.930,246.068 118.590,245.726 117.600 C 245.384 116.610,244.316 113.654,243.352 111.031 C 242.388 108.408,241.600 106.116,241.600 105.938 C 241.600 105.760,246.145 105.566,251.700 105.507 L 261.800 105.400 261.906 92.700 L 262.011 80.000 225.106 80.082 C 204.808 80.127,186.580 80.209,184.600 80.262 M218.347 116.200 C 218.625 117.080,219.014 118.160,219.210 118.600 C 219.407 119.040,220.941 123.450,222.620 128.400 C 226.683 140.378,231.027 153.032,234.015 161.600 C 235.358 165.450,236.789 169.590,237.194 170.800 C 238.153 173.658,245.022 193.610,247.179 199.800 C 248.099 202.440,249.368 206.130,249.999 208.000 C 250.631 209.870,252.256 214.550,253.611 218.400 C 254.965 222.250,256.168 225.805,256.284 226.300 L 256.493 227.200 217.073 227.200 L 177.654 227.200 180.009 220.300 C 181.305 216.505,183.462 210.250,184.803 206.400 C 186.144 202.550,187.757 197.870,188.389 196.000 C 189.020 194.130,191.094 188.100,192.998 182.600 C 194.902 177.100,196.978 171.070,197.612 169.200 C 198.245 167.330,199.859 162.650,201.199 158.800 C 202.538 154.950,204.333 149.730,205.186 147.200 C 206.040 144.670,208.296 138.100,210.199 132.600 C 212.102 127.100,214.170 121.070,214.793 119.200 C 216.963 112.695,217.180 112.511,218.347 116.200"
            stroke="#ffc71e"
            fill="#ffc71e"
            fillRule="evenodd"
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{ duration: 2.5, loop: Infinity }}
          />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedArchiveLogo;