//Suspense with multiple asyn children

import { Suspense } from "react";
import CourseDetails from "./CourseDetails";
import UserPosts from "./UserPosts";

export default function Profile(){
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <CourseDetails/>
            <UserPosts/>
        </Suspense>

        {/* <Suspense fallback={<p>Loading2...</p>}>
        </Suspense> */}
        </div>
    )
}
