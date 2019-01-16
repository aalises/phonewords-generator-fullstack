import React from "react";
import { ClipLoader } from 'react-spinners';

export default (Component : React.Component) => {
    return props => (
      <React.Suspense fallback={<ClipLoader sizeUnit={"px"} size={15} color={'#D3D3D3'} />}>
        <Component {...props} />
      </React.Suspense>
    );
}
