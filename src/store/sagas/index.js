/**
 * Created by John on 2017/3/22.
 */
import count from './count'
import effect from './effect'

export default function*(){
    yield [
        count(),
        effect(),
    ]
}