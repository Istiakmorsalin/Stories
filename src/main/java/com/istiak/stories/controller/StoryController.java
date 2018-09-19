package com.istiak.stories.controller;

import com.istiak.stories.model.Story;
import com.istiak.stories.repository.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class StoryController {

    @Autowired
    StoryRepository storyRepository;


    @PostMapping("/stories")
    public Story createNote(@Valid @RequestBody Story story) {
        return storyRepository.save(story);
    }
}
