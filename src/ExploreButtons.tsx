import * as React from 'react'

type HandleChanges = (text: string) => void
type ExploreButtonProps = {
  handleChanges: HandleChanges
  isSelected: (val: string) => string
}

export const ExploreButtons: React.SFC<ExploreButtonProps> = ({ handleChanges, isSelected }) => {

  const handleGrants = () => handleChanges('Grants')
  const handlePublications = () => handleChanges('Publications')
  const handleStudies = () => handleChanges('Studies')
  const handleDatasets = () => handleChanges('Datasets')
  const handleTools = () => handleChanges('Tools')
  return (
    <div className="explore-buttons">
      <button className={`${isSelected('Grants')}`} onClick={handleGrants}>
        Grants
      </button>
      <button className={isSelected('Publications')} onClick={handlePublications}>
      Publications
      </button>
      <button className={isSelected('Studies')} onClick={handleStudies}>
        Studies
      </button>
      <button className={isSelected('Datasets')} onClick={handleDatasets}>
        Datasets
      </button>
      <button className={isSelected('Tools')} onClick={handleTools}>
        Tools
      </button>
    </div>
  )
}
