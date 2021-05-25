import Image from 'next/image';
import MovieItem from './MovieItem';
import FlipMove from 'react-flip-move';










function Results({results}) {
    return (
        <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center p-10'>

            {results.map(res => {
                return (
                    <MovieItem key={res.id} result={res}/>
                )
            })}
        
            
        </FlipMove>
    )
}

export default Results
