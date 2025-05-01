import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Container, Grid } from '@mui/material';

import EastIcon from '@mui/icons-material/East';
import PreviewIcon from '@mui/icons-material/Preview';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CustomBtn from './Custombtn';


const CustomCard = (props) => {
    const {
        productName,
        productImage,
        price,
        oldPrice,
        discountBadge,
        badgeType,
        badgeText,
        rating,
        onViewDetails,
        onAddToCart,
        detailsLink,
        onFavoriteClick, // New prop for handling favorite click
    } = props;

    // State for favorite icon
    const [isFavorite, setIsFavorite] = useState(false);

    // Function to handle favorite click
    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        if (onFavoriteClick) {
            onFavoriteClick(!isFavorite);
        }
    };

    const getBadgeColor = () => {
        if (badgeType === 'hot') {
            return 'error';
        } else if (badgeType === 'bestSeller') {
            return 'success';
        } else if (badgeType === 'new') {
            return 'primary';
        } else if (badgeType === 'limited') {
            return 'warning';
        } else {
            return 'primary';
        }
    };

    // Function to determine badge text
    const getBadgeText = () => {
        if (badgeType === "hot") {
            return "HOT";
        } else if (badgeType === "bestSeller") {
            return "BEST SELLER";
        } else if (badgeType === "limited") {
            return "LIMITED";
        } else if (badgeType === "new") {
            return "NEW";
        } else if (badgeType === "no Stocks") {
            return "NO STOCK";
        } else {
            return "";
        }

    };

    return (
        <Box>
            <Card
                sx={{
                    width: 280,
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'box-shadow 0.3s',
                    '&:hover': { boxShadow: 6 },
                    my: 3
                }}>
                {/* Product Image Container */}
                <Box sx={{ position: 'relative', }}>
                    <CardMedia
                        component="img"
                        image={productImage}
                        alt={productName}
                        sx={{
                            // backgroundColor: "#fff",
                            width: '100%',
                            height: '200px',
                            objectFit: 'cover',
                            transition: 'transform 0.3s',
                            '&:hover': { transform: 'scale(1.07)' },
                        }}
                    />
                    {/* Badge */}
                    {badgeType && (
                        <CustomBtn
                            label={getBadgeText()}
                            color={getBadgeColor()}
                            sx={{
                                position: 'absolute',
                                top: 15,
                                left: 10,
                                height: "30px",
                                fontSize: "13px",
                                // p: 1,
                            }}
                        />
                    )}
                    {/* Discount Badge */}
                    {discountBadge && (
                        <CustomBtn
                            label={discountBadge}
                            color="error"
                            sx={{
                                position: 'absolute',
                                top: 15,
                                right: 10,
                                height: "30px",
                                fontSize: "13px",
                                // p: 1,
                            }}
                        />
                    )}
                </Box>
                <CardContent sx={{ p: 2 }}>
                    {/* Product Title */}
                    <Typography
                        component={Link}
                        to={detailsLink || '/'}
                        sx={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            transition: 'color 0.3s',
                            '&:hover': { color: 'primary.main' },
                            textDecoration: 'none',
                        }}
                    >
                        {productName}
                    </Typography>
                    {/* Favorite Icon */}
                    <Box
                        onClick={handleFavoriteClick}
                        sx={{
                            float: "right",
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {isFavorite ? (
                            <FavoriteIcon sx={{ color: "red" }} />
                        ) : (
                            <FavoriteBorderIcon sx={{ color: "grey" }} />
                        )}
                    </Box>

                    {/* Price Section */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }}>
                        <Typography variant="h5" color="primary"> ${price} </Typography>
                        {oldPrice && (
                            <Typography
                                variant="body2"
                                sx={{ textDecoration: 'line-through', color: 'gray' }}
                            >
                                ${oldPrice}
                            </Typography>
                        )}
                    </Box>

                    {/* Rating */}
                    <Rating name="size-small" defaultValue={rating || 0} size="small" />
                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <CustomBtn
                            variant="outlined"
                            label="View Details"
                            fullWidth
                            endIcon={<EastIcon />}
                            onClick={onViewDetails}
                        />
                        <CustomBtn
                            variant="outlined"
                            label="Add to Cart"
                            fullWidth
                            endIcon={<PreviewIcon />}
                            onClick={onAddToCart}
                        />
                    </Box>
                </CardContent>
            </Card>

        </Box>
    );
};

export default CustomCard;


