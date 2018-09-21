package com.istiak.stories.repository;

import com.istiak.stories.model.Story;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface StoryRepository extends CrudRepository<Story, Long> {

}
