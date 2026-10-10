package com.tripnest.controller;

import com.tripnest.dto.MessageResponse;
import com.tripnest.security.services.UserDetailsImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

/**
 * Test controller demonstrating role-based access control.
 * <p>
 * Endpoints:
 *   GET /api/test/all        — Public access
 *   GET /api/test/traveler   — ROLE_TRAVELER only
 *   GET /api/test/agent      — ROLE_AGENT only
 *   GET /api/test/admin      — ROLE_ADMIN only
 *   GET /api/test/profile    — Any authenticated user (returns their profile)
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {

    @GetMapping("/all")
    public ResponseEntity<MessageResponse> allAccess() {
        return ResponseEntity.ok(new MessageResponse(
                "Welcome to TripNest! This is a public endpoint."));
    }

    @GetMapping("/traveler")
    @PreAuthorize("hasRole('TRAVELER')")
    public ResponseEntity<MessageResponse> travelerAccess() {
        return ResponseEntity.ok(new MessageResponse(
                "Traveler Dashboard — Welcome, explorer!"));
    }

    @GetMapping("/agent")
    @PreAuthorize("hasRole('AGENT')")
    public ResponseEntity<MessageResponse> agentAccess() {
        return ResponseEntity.ok(new MessageResponse(
                "Agent Panel — Manage your travel packages here."));
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<MessageResponse> adminAccess() {
        return ResponseEntity.ok(new MessageResponse(
                "Admin Panel — Full platform control enabled."));
    }

    @GetMapping("/profile")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<?> getUserProfile() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) auth.getPrincipal();
        return ResponseEntity.ok(userDetails);
    }
}
