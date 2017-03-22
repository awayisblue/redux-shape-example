/**
 * Created by John on 2017/3/22.
 */
import count from './count'

export default function*(){
    yield [
        count()
    ]
}