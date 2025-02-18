import React, { Fragment } from 'react'
import Mynavbar from "../shares/Mynavbar";
import Mysidebar from "../shares/Mysidebar";
import Apidata from '../shares/Apidata';
function Mymainpage() {
  return (
    <Fragment>

        <Mynavbar/>
        <Apidata/>
</Fragment>
)
}

export default Mymainpage