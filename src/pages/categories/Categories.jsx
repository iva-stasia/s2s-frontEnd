import NoResultsFound from '~/components/no-results-found/NoResultsFound'
import PageWrapper from '~/components/page-wrapper/PageWrapper'
import CategoriesList from '~/components/categories-list/CategoriesList'
import CategoriesSearch from '~/containers/categories-search/CategoriesSearch'
import HeaderCard from '~/components/header-card/HeaderCard'
import RequestNewCategorySubject from '~/components/request-new-category-subject/RequestNewCategorySubject'
import subjectIcon from '~/assets/img/offer-page/subject-icon.svg'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Categories = () => {
  const [searchResults, setSearchResults] = useState([])
  const [searchPerformed, setSearchPerformed] = useState(false)
  const { userRole } = useSelector((state) => state.appMain)

  const handleSearchResults = (results) => {
    setSearchResults(results)
    setSearchPerformed(true)
  }
  return (
    <PageWrapper>
      <HeaderCard
        description={'findOffers.offerRequestBlock.description'}
        imageAlt='Subject'
        imageSrc={subjectIcon}
        titleStudent={'findOffers.offerRequestBlock.title.student'}
        titleTutor={'findOffers.offerRequestBlock.title.tutor'}
        userRole={userRole}
      />
      <CategoriesSearch onSearchResults={handleSearchResults} />
      <RequestNewCategorySubject />
      {searchPerformed && searchResults.length === 0 ? (
        <NoResultsFound />
      ) : (
        <CategoriesList searchedCategories={searchResults} />
      )}
    </PageWrapper>
  )
}

export default Categories
