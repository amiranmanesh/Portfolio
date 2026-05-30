SHELL := /bin/bash

LATEX ?= $(firstword $(shell command -v xelatex 2>/dev/null) $(wildcard /Library/TeX/texbin/xelatex))
RESUME_DIR := resume
RESUME_TEX := $(RESUME_DIR)/resume.tex
RESUME_PDF := $(RESUME_DIR)/resume.pdf
RESUME_FILE := $(notdir $(RESUME_TEX))
RESUME_CLASS_DIR ?= $(HOME)/Documents/Resume
RESUME_FONT_PATTERN := Vazir|Vazirmatn

.PHONY: help install run build resume-pdf resume-font-check resume-clean clean

help:
	@echo "Available targets:"
	@echo "  make install      Install Node.js dependencies"
	@echo "  make run          Run portfolio app in development mode"
	@echo "  make build        Build portfolio for production"
	@echo "  make resume-pdf   Convert $(RESUME_TEX) to $(RESUME_PDF)"
	@echo "  make resume-font-check Check whether Vazir/Vazirmatn is installed"
	@echo "  make resume-clean Remove LaTeX auxiliary files"
	@echo "  make clean        Remove LaTeX auxiliary files and PDF"

install:
	npm install

run:
	npm start

build:
	npm run build

resume-pdf: $(RESUME_TEX)
	@if [ -z "$(LATEX)" ]; then \
		echo "No xelatex found."; \
		echo "On macOS, install it with: brew install --cask basictex"; \
		echo "Then open a new terminal or run: export PATH=\"/Library/TeX/texbin:$$PATH\""; \
		exit 1; \
	fi
	@if ! system_profiler SPFontsDataType 2>/dev/null | grep -Eiq "$(RESUME_FONT_PATTERN)"; then \
		echo "Vazir/Vazirmatn font is not installed, so the resume cannot be compiled with Vazir."; \
		echo "Install Vazirmatn or Vazir .ttf files in macOS Font Book, then run: make resume-pdf"; \
		exit 1; \
	fi
	cd $(RESUME_DIR) && TEXINPUTS=".:$(RESUME_CLASS_DIR):" "$(LATEX)" -interaction=nonstopmode -halt-on-error "$(RESUME_FILE)"
	cd $(RESUME_DIR) && TEXINPUTS=".:$(RESUME_CLASS_DIR):" "$(LATEX)" -interaction=nonstopmode -halt-on-error "$(RESUME_FILE)"
	@echo "Created $(RESUME_PDF)"

resume-font-check:
	@if system_profiler SPFontsDataType 2>/dev/null | grep -Eiq "$(RESUME_FONT_PATTERN)"; then \
		echo "Vazir/Vazirmatn is installed."; \
	else \
		echo "Vazir/Vazirmatn is not installed."; \
		echo "Install the .ttf files into Font Book, then run: make resume-pdf"; \
	fi

resume-clean:
	rm -f $(RESUME_DIR)/*.aux $(RESUME_DIR)/*.log $(RESUME_DIR)/*.out $(RESUME_DIR)/*.toc $(RESUME_DIR)/*.xdv $(RESUME_DIR)/missfont.log

clean: resume-clean
	rm -f $(RESUME_PDF)
