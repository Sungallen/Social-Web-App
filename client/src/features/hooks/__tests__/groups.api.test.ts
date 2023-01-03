// import { getPosts } from 'features/posts/api/index'
import { getGroups } from 'features/hooks/groups.api'
import fixture from 'test/msw/fixtures/db.initial.data.json'

describe('Post API test - MSW example', () => {
  it('should fetch all Posts', async () => {
    // Given
    const { groups } = fixture

    // When
    const result = await getGroups()

    // Then
    expect(result).toEqual(groups)
  })
})
