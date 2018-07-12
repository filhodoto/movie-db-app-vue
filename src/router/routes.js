import MoviesList from '../components/MoviesList'
import MovieDetail from '../components/MovieDetail'

export const Routes = [
    {
        path: '/',
        name: 'Movies List',
        component: MoviesList
    },
    {
        path: '/movie/:id',
        name: 'Movie Detail',
        component: MovieDetail
    }
]