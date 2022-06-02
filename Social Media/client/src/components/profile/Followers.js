import React from 'react'
import UserCard from '../UserCard'
import FollowBtn from '../FollowBtn'
import { useSelector } from 'react-redux'
import UserCard from '../UserCard'

const Followers = ({users, setShowFollowers}) => {
    const { Auth} = useSelector(state => state)
    
    return (
        <div classname="Follow">
            <div classname="folloow_box">
                <h5 className="text-center   ">Followers</h5>
                <hr/>
                {
                    users.map(user => (
                        <UserCard key={user._id} user={user} setShowFollowers={setShowFollowers}>
                            {
                                Auth.user._id !== user._id && <FollowBtn user={user} />
                            }

                        </UserCard>
                    ))
                }

                <div className="close" onClick={() => setShowFollowers(false)}>
                &times;
            </div>
              
            </div>
        </div>
    )
            } 
           
           
export default Followers