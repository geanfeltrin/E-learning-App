import React from 'react';
import Svg, {
  G, Path, Defs, LinearGradient, Stop, ClipPath,
} from 'react-native-svg';

const Diamonds = props => (
  <Svg width={57} height={48} fill="none" {...props}>
    <G clipPath="url(#prefix__clip0)">
      <Path d="M42.044 0H14.17L0 16.105 28.11 48l28.104-31.864L42.044 0z" fill="#29ABE2" />
      <Path d="M21.005 7.94L14.054.096 0 16.072l.123.209h13.651l7.231-8.34z" fill="#29ABE2" />
      <Path
        d="M27.708 0h.245l6.983 8.988L42.164 0h-28.11l6.951 8.669L27.708 0z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M14.053 31.947l14.057 16.04-7.197-16.04h-6.86zM28.11 47.988l14.054-16.041h-7.136l-6.918 16.04zM42.164.055l-7.228 8.202 6.951 8.024h14.21l.123-.23L42.164.054z"
        fill="#29ABE2"
      />
      <Path
        d="M13.774 16.28H.123l13.93 15.811 4.537-5.13-4.816-10.68zM37.38 26.633l4.784 5.504L56.097 16.28h-14.21l-4.506 10.352z"
        fill="#00F"
      />
      <Path
        opacity={0.8}
        d="M18.59 26.77l-4.537 5.177h6.86L18.59 26.77zM35.028 31.947h7.136l-4.783-5.459-2.353 5.459z"
        fill="#29ABE2"
      />
      <Path d="M28.11 16.05l-7.105-8.063-7.231 8.294h14.213l.123-.23z" fill="#FF9554" />
      <Path d="M28.11 16.05l-7.105-8.063-7.231 8.294h14.213l.123-.23z" fill="#008CD4" />
      <Path d="M27.708 0l-6.703 8.19 7.105 7.94 6.826-7.538L27.953 0h-.245z" fill="#FFAA3F" />
      <Path
        opacity={0.9}
        d="M27.708 0l-6.703 8.19 7.105 7.94 6.826-7.538L27.953 0h-.245z"
        fill="#29ABE2"
      />
      <Path d="M28.233 16.28h13.654l-6.951-8.023-6.826 7.84.123.183z" fill="#FFDB54" />
      <Path d="M28.233 16.28h13.654l-6.951-8.023-6.826 7.84.123.183z" fill="#008CD4" />
      <Path d="M28.233 16.1l-.123-.142-.123.141h.246z" fill="#946400" />
      <Path opacity={0.3} d="M28.233 16.1l-.123-.142-.123.141h.246z" fill="#FF7B15" />
      <Path
        d="M13.774 16.28l4.816 10.727 9.397-10.727H13.774zM37.38 26.725l4.507-10.445H28.233l9.148 10.445z"
        fill="#006AE7"
      />
      <Path
        d="M28.233 16.28h-.246l-9.396 10.583 9.52 21.112L37.38 26.6 28.233 16.28z"
        fill="#43C3EF"
      />
    </G>
    <Defs>
      <LinearGradient
        id="prefix__paint0_linear"
        x1={14.053}
        y1={4.494}
        x2={42.164}
        y2={4.494}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#69AFE0" />
        <Stop offset={0.1} stopColor="#60ADDF" />
        <Stop offset={0.26} stopColor="#46A6DC" />
        <Stop offset={0.46} stopColor="#1D9BD7" />
        <Stop offset={0.58} stopColor="#0094D3" />
        <Stop offset={1} stopColor="#007FC3" />
      </LinearGradient>
      <ClipPath id="prefix__clip0">
        <Path fill="#fff" d="M0 0h56.22v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Diamonds;
