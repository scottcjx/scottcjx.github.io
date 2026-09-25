---
title: "Multi-modal, multi-species, and multi-task latent-space model for decoding level of consciousness"
collection: publications
category: manuscripts
permalink: /publication/2025-12-01-paper-title-number-1
excerpt: ''
date: 2025-12-01
venue: 'NeurIPS 2025 Workshop on Foundation Models for the Brain and Body'
authors:
  - "Wang, Julia H."
  - "Fakiri, Méliya El"
  - "Swann, Jake"
  - "Gado, Elena Grazia"
  - "Cheng, Scott JX"
  - "Tasserie, Jordy"
  - "Huang, Rongchen"
  - "Liu, Jia"
  - "Lee, Joseph"
  - "Ye, Tian"
  - "Floch, Pierre L."
  - "Armitage, Oliver"
slidesurl: ''
paperurl: 'https://www.biorxiv.org/content/10.64898/2025.12.03.692227v1.full.pdf'
bibtexurl: 'https://www.biorxiv.org/highwire/citation/5089519/bibtext'
citation: 'Wang, J.H., Fakiri, M.E., Swann, J., Gado, E.G., Cheng, S.J., Tasserie, J., Huang, R., Liu, J., Lee, J., Ye, T., Floch, P.L., & Armitage, O. (2025). Multi-modal, multi-species, and multi-task latent-space model for decoding level of consciousness. bioRxiv.'
---
Assessing the degree and characteristics of consciousness is central to caring for patients with Disorders of Consciousness (DoC), yet current standard of care is a bedside questionnaire. Using a laminar neural probe we introduce a self-supervised, multi-modal representation learning approach that constructs an interpretable 2-D latent space of brain state from continuous neural recordings. We jointly encode local field potentials (LFPs), single-unit firing rates, and a movement proxy into a time-aware autoregressive VAE (TN-VAE). In rats, pigs and humans undergoing controlled depth anesthesia experiments, the learned latent trajectories nonlinearly, but smoothly, separate four expert-defined states (awake, light, moderate, deep) at 2s resolution, exceeding the temporal granularity of behavioral scoring (15m). The latent space supports linear readout of both coarse state and individual behavioral components, and its axes align with known physiology: delta/alpha power differentiates unconscious sub-states, while gamma and unit firing distinguish wakefulness. To enable cross-species use and incomplete modality sets, we add lightweight, species-specific stitching layers. This model pretrained on tri-modal rat data and fine-tuned with unimodal (LFP) pig data and unimodal human intraoperative data, successfully separates awake versus anesthetized states in new unseen human subjects, demonstrating zero-shot multi-subject transfer without per-patient calibration. The model further generalizes in a multi-task manner to predict the results of additional stimuli. These results highlight a path toward a foundation model for DoC that generalizes across sessions, subjects, species, and stimuli to enable scalable, continuous brain-state monitoring and clinical decision support.
