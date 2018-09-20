package com.istiak.stories.controller;

import com.istiak.stories.exception.ResourceNotFoundException;
import com.istiak.stories.model.Story;
import com.istiak.stories.repository.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class StoryController {

    @Autowired
    StoryRepository storyRepository;


    @PostMapping("/stories")
    public Story createNote(@Valid @RequestBody Story story) {
        return storyRepository.save(story);
    }

    @GetMapping("/stories/{id}")
    public Story getNoteById(@PathVariable(value = "id") Long storyId) {
        return storyRepository.findById(storyId)
                .orElseThrow(() -> new ResourceNotFoundException("stories", "id", storyId));
    }

    @GetMapping("/stories")
    public List<Story> getAllNotes() {
        return (List<Story>) storyRepository.findAll();
    }

    @PutMapping("/stories/{id}")
    public Story updateNote(@PathVariable(value = "id") Long storyId,
                           @Valid @RequestBody Story storyDetails) {

        Story story = storyRepository.findById(storyId)
                .orElseThrow(() -> new ResourceNotFoundException("Story", "id", storyId));

        story.setTitle(storyDetails.getTitle());
        story.setBody(storyDetails.getBody());
        story.setPublishedAt(storyDetails.getPublishedAt());

        Story updatedStory = storyRepository.save(story);
        return updatedStory;
    }

    @DeleteMapping("/stories/{id}")
    public ResponseEntity<?> deleteStory(@PathVariable(value = "id") Long storyId) {
        Story story = storyRepository.findById(storyId)
                .orElseThrow(() -> new ResourceNotFoundException("Story", "id", storyId));

        storyRepository.delete(story);

        return ResponseEntity.ok().build();
    }


}
